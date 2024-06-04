package com.example.gameroomapi;

import com.example.gameroomapi.model.PlayerUser;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
public class GameRoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private boolean active;

    private String qrCodeData;

    @OneToMany(mappedBy = "gameRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PlayerUser> players = new ArrayList<>();

    public void setActive(boolean active) {
        this.active = active;
    }

    public void setQrCodeData(String qrCodeData) {
        this.qrCodeData = qrCodeData;
    }

    public void addPlayer(PlayerUser player) {
        this.players.add(player);
        player.setGameRoom(this);
    }

    public void removePlayer(PlayerUser player) {
        this.players.remove(player);
        player.setGameRoom(null);
    }

    public void setPlayers(List<PlayerUser> players) {
        this.players = players;
    }
}