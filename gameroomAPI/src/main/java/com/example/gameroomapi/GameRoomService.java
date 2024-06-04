package com.example.gameroomapi;
import com.example.gameroomapi.model.PlayerUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.gameroomapi.repo.PlayerUserRepo;

@Service
public class GameRoomService {

    @Autowired
    private GameRoomRepository gameRoomRepository;
    @Autowired
    private PlayerUserRepo playerUserRepo;

    public GameRoomEntity createGameRoom() {
        GameRoomEntity gameRoom = new GameRoomEntity();
        gameRoom.setActive(true);
        gameRoom.setQrCodeData("localhost:5173/lobby");
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoomEntity joinRoom(int roomId, String username, int avatar, String cookie) {
        return gameRoomRepository.findById(String.valueOf(roomId)).map(gameRoom -> {
            PlayerUser playerUser = new PlayerUser(username, avatar, cookie);
            playerUserRepo.save(playerUser);
            gameRoom.getPlayers().add(playerUser);
            return gameRoomRepository.save(gameRoom);
        }).orElseThrow(() -> new RuntimeException("Game room not found"));
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