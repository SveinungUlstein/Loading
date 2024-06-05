package com.example.gameroomapi.service;

import com.example.gameroomapi.model.GameRoomEntity;
import com.example.gameroomapi.repo.GameRoomRepository;
import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.repo.PlayerUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GameRoomService {

    @Autowired
    private GameRoomRepository gameRoomRepository;

    @Autowired
    private PlayerUserRepo playerUserRepo;

    public GameRoomEntity createGameRoom() {
        GameRoomEntity gameRoom = new GameRoomEntity();
        gameRoom.setActive(true);
        gameRoom.setQrCodeData("http://localhost:5173/lobby");
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoomEntity joinRoom(int roomId, Long userId, String username, Integer avatar, String cookie) {
        return gameRoomRepository.findById(String.valueOf(roomId)).map(gameRoom -> {
            PlayerUser playerUser = playerUserRepo.findById(userId).orElseGet(() -> {
                PlayerUser newPlayer = new PlayerUser(userId, username, avatar, cookie);
                return playerUserRepo.save(newPlayer);
            });
            if (!gameRoom.getPlayers().contains(playerUser)) {
                playerUser.setGameRoom(gameRoom);
                gameRoom.getPlayers().add(playerUser);
            }
            return gameRoomRepository.save(gameRoom);
        }).orElseThrow(() -> new RuntimeException("Game room not found"));
    }

    public GameRoomEntity showRoomList(int roomId) {
        return gameRoomRepository.findById(String.valueOf(roomId)).orElseThrow(() -> new RuntimeException("Game room not found"));
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

    public Optional<GameRoomEntity> getGameRoomById(int roomId) {
        return gameRoomRepository.findById(String.valueOf(roomId));
    }
}