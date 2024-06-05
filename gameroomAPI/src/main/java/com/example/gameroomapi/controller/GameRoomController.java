package com.example.gameroomapi.controller;
import com.example.gameroomapi.model.GameRoomEntity;
import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.service.GameRoomService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/gameroom")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class GameRoomController {

    @Autowired
    private GameRoomService gameRoomService;

    @Autowired
    private HttpSession httpSession;
    private int getCurrentRoomId() {
        Integer roomId = (Integer) httpSession.getAttribute("roomId");
        if (roomId == null) {
            throw new RuntimeException("No room joined. Join a room first.");
        }
        return roomId;
    }

    private void setCurrentRoomId(int roomId) {
        httpSession.setAttribute("roomId", roomId);
    }

    @PostMapping("/lobby")
    public ResponseEntity<GameRoomEntity> createGameRoom() {
        GameRoomEntity gameRoom = gameRoomService.createGameRoom();
        setCurrentRoomId(gameRoom.getId());
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
    }

    @PostMapping("/join")
    public ResponseEntity<GameRoomEntity> joinGameRoom(@RequestParam Long userId, @RequestParam String username, @RequestParam Integer avatar, @RequestParam String cookie) {
        int roomId = getCurrentRoomId();
        GameRoomEntity gameRoom = gameRoomService.joinRoom(roomId, userId, username, avatar, cookie);
        return new ResponseEntity<>(gameRoom, HttpStatus.OK);
    }

    @GetMapping("/lobby")
    public ResponseEntity<GameRoomEntity> getLobby() {
        int roomId = getCurrentRoomId();
        GameRoomEntity gameRoom = gameRoomService.showRoomList(roomId);
        return new ResponseEntity<>(gameRoom, HttpStatus.OK);
    }

    @GetMapping("/players")
    public ResponseEntity<List<PlayerUser>> getPlayers() {
        int roomId = getCurrentRoomId();
        Optional<GameRoomEntity> gameRoom = gameRoomService.getGameRoomById(roomId);
        if (gameRoom.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        List<PlayerUser> players = gameRoom.get().getPlayers();
        return ResponseEntity.ok(players);
    }

    @GetMapping("/status")
    public ResponseEntity<Boolean> checkGameRoomStatus() {
        int roomId = getCurrentRoomId();
        boolean isActive = gameRoomService.isGameRoomActive(roomId);
        return new ResponseEntity<>(isActive, HttpStatus.OK);
    }

    @PostMapping("/finish")
    public ResponseEntity<Void> finishGameRoom() {
        int roomId = getCurrentRoomId();
        gameRoomService.finishGameRoom(roomId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}