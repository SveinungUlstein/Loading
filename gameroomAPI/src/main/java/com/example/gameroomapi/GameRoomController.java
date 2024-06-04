package com.example.gameroomapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gameroom")
@CrossOrigin(origins = "http://localhost:5173")
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
    public ResponseEntity<GameRoomEntity> getPlayers(@RequestParam int roomId) {
        GameRoomEntity gameRoom = gameRoomService.showPlayerList(roomId);
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
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