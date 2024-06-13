package com.example.gameroomapi.service;

import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.repo.PlayerUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class playerUserService {

    @Autowired
    private PlayerUserRepo playerUserRepo;

    public List<PlayerUser> getAllPlayerUsers() {
        return playerUserRepo.findAll();
    }

    public PlayerUser getPlayerUserById(Long id) {
        return playerUserRepo.findById(id).orElse(null);
    }

    public PlayerUser savePlayerUser(PlayerUser playerUser) {
        return playerUserRepo.save(playerUser);
    }

    public PlayerUser updatePlayerUser(Long id, PlayerUser updatedPlayer) {
        return playerUserRepo.findById(id)
                .map(player -> {
                    player.setUserName(updatedPlayer.getUserName());
                    player.setAvatar(updatedPlayer.getAvatar());
                    player.setCookie(updatedPlayer.getCookie());
                    return playerUserRepo.save(player);
                })
                .orElse(null);
    }

    public boolean deletePlayerUser(Long id) {
        return playerUserRepo.findById(id)
                .map(player -> {
                    playerUserRepo.delete(player);
                    return true;
                })
                .orElse(false);
    }
}