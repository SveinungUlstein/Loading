package com.example.gameroomapi;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.MapKeyColumn;
import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Entity
public class GameRoomEntity {

    @Id
    private int id;

    private boolean active;

    private String qrCodeData;

    @ElementCollection
    @MapKeyColumn(name = "userId")
    private Map<Integer, userDetail> users = new HashMap<>();

    public void setId(int id) {
        this.id = id;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public void setQrCodeData(String qrCodeData) {
        this.qrCodeData = qrCodeData;
    }

    public void addUser(int userId, String username, Byte avatar, String cookie){
        users.put(userId, new userDetail(username, avatar, cookie));
    }
}