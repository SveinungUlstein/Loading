package com.example.gameroomapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/GameRoom")
public class  GameRoomController {

    @Autowired
    private GameRoomService gameRoomService;

    @PostMapping("/create")
    public ResponseEntity<GameRoomEntity> createGameRoom() {
        GameRoomEntity gameRoom = gameRoomService.createGameRoom();
        return new ResponseEntity<>(gameRoom, HttpStatus.CREATED);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Boolean> checkGameRoomStatus(@PathVariable String id) {
        boolean isActive = gameRoomService.isGameRoomActive(id);
        return new ResponseEntity<>(isActive, HttpStatus.OK);
    }

    @PostMapping("/finish/{id}")
    public ResponseEntity<Void> finishGameRoom(@PathVariable String id) {
        gameRoomService.finishGameRoom(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}