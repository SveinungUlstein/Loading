package com.example.gameroomapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gameroom")
@CrossOrigin(origins = "http://localhost:5173")
public class  GameRoomController {
    @Autowired
    private GameRoomService gameRoomService;

    @PostMapping("/lobby")
    public ResponseEntity<GameRoomEntity> createGameRoom() {
        GameRoomEntity gameRoom = gameRoomService.createGameRoom();
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
    }

    @PostMapping("/join")
    public ResponseEntity<GameRoomEntity> joinGameRoom(@RequestParam int roomId, @RequestParam String username, @RequestParam Byte avatar, @RequestParam String cookie) {
        GameRoomEntity gameRoom = gameRoomService.joinRoom(roomId, username, avatar, cookie);
        return new ResponseEntity<>(gameRoom, HttpStatus.OK);
    }


    @GetMapping("/status/{id}")
    public ResponseEntity<Boolean> checkGameRoomStatus(@PathVariable String id) {
        boolean isActive = gameRoomService.isGameRoomActive(Integer.parseInt(id));
        return new ResponseEntity<>(isActive, HttpStatus.OK);
    }

    @PostMapping("/finish/{id}")
    public ResponseEntity<Void> finishGameRoom(@PathVariable String id) {
        gameRoomService.finishGameRoom(Integer.parseInt(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}