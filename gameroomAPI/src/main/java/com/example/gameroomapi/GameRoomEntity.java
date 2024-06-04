package com.example.gameroomapi;

import jakarta.persistence.*;
import lombok.Getter;
import com.example.gameroomapi.model.PlayerUser;

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

}