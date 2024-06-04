package com.example.gameroomapi;

import jakarta.persistence.Embeddable;
import lombok.Getter;

@Getter
@Embeddable
public class userDetail {

    private String username;
    private Byte avatar;
    private String cookie;

    public userDetail() {
    }

    public userDetail(String username, Byte avatar, String cookie) {
        this.username = username;
        this.avatar = avatar;
        this.cookie = cookie;
    }
}