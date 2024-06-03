package com.example.gameroomapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gameroom")
@CrossOrigin(origins = "http://localhost:5173")
public class  GameRoomController {

    @Autowired
    private GameRoomService gameRoomService;
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/lobby")
    public ResponseEntity<GameRoomEntity> createGameRoom() {
        GameRoomEntity gameRoom = gameRoomService.createGameRoom();
        messagingTemplate.convertAndSend("(/gameroom/lobby)", gameRoom.getId());
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