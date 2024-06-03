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
        gameRoom.setId(1);
        gameRoom.setActive(true);
        gameRoom.setQrCodeData("http://localhost:8080/status/" + gameRoom.getId());
        return gameRoomRepository.save(gameRoom);
    }

    public boolean isGameRoomActive(int id) {
        return gameRoomRepository.findById(String.valueOf(id)).map(GameRoomEntity::isActive).orElse(false);
    }

    public void finishGameRoom(int id) {
        gameRoomRepository.findById(String.valueOf(id)).ifPresent(room -> {
            room.setActive(false);
            gameRoomRepository.save(room);
        });
    }
}