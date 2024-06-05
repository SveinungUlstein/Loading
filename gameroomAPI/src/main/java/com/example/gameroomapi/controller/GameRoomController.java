package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.GameRoomEntity;
import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.service.GameRoomService;
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

    @PostMapping("/lobby")
    public ResponseEntity<GameRoomEntity> createGameRoom() {
        GameRoomEntity gameRoom = gameRoomService.createGameRoom();
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
    }

    @PostMapping("/join")
    public ResponseEntity<GameRoomEntity> joinGameRoom(@RequestParam int roomId, @RequestParam Long userId, @RequestParam String username, @RequestParam Integer avatar, @RequestParam String cookie) {
        GameRoomEntity gameRoom = gameRoomService.joinRoom(roomId, userId, username, avatar, cookie);
        return new ResponseEntity<>(gameRoom, HttpStatus.OK);
    }

    @GetMapping("/lobby")
    public ResponseEntity<GameRoomEntity> getLobby(@RequestParam int roomId) {
        GameRoomEntity gameRoom = gameRoomService.showRoomList(roomId);
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
    }

    @GetMapping("/players")
    public ResponseEntity<List<PlayerUser>> getPlayers(@RequestParam int roomId) {
        Optional<GameRoomEntity> gameRoom = gameRoomService.getGameRoomById(roomId);
        if (gameRoom == null) {
            return ResponseEntity.notFound().build();
        }
        List<PlayerUser> players = gameRoom.get().getPlayers();
        return ResponseEntity.ok(players);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Boolean> checkGameRoomStatus(@PathVariable int id) {
        boolean isActive = gameRoomService.isGameRoomActive(id);
        return new ResponseEntity<>(isActive, HttpStatus.OK);
    }

    @PostMapping("/finish/{id}")
    public ResponseEntity<Void> finishGameRoom(@PathVariable int id) {
        gameRoomService.finishGameRoom(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}