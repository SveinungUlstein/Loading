package com.example.gameroomapi;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class GameRoomEntity {

    @Id
    private int id;

    private boolean active;

    private String qrCodeData;

    public void setId(int id) {
        this.id = id;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public void setQrCodeData(String qrCodeData) {
        this.qrCodeData = qrCodeData;
    }
}