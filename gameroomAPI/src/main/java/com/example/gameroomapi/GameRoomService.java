package com.example.gameroomapi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class GameRoomService {

    @Autowired
    private GameRoomRepository gameRoomRepository;

    public GameRoomEntity createGameRoom() {
        GameRoomEntity gameRoom = new GameRoomEntity();
        gameRoom.setId(UUID.randomUUID().toString());
        gameRoom.setActive(true);
        gameRoom.setQrCodeData("http://localhost:8080/GameRoom/status/" + gameRoom.getId());
        return gameRoomRepository.save(gameRoom);
    }

    public boolean isGameRoomActive(String id) {
        return gameRoomRepository.findById(id).map(GameRoomEntity::isActive).orElse(false);
    }

    public void finishGameRoom(String id) {
        gameRoomRepository.findById(id).ifPresent(room -> {
            room.setActive(false);
            gameRoomRepository.save(room);
        });
    }
}