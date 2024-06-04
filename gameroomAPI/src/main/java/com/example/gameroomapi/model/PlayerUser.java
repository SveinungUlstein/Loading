package com.example.gameroomapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
public class PlayerUser {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "playerUser_seq_gen")
    @SequenceGenerator(name = "playerUser_seq_gen", sequenceName = "playerUser_seq", allocationSize = 1)
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "username")
    private String userName;

    @Column(name = "avatar", nullable = false)
    private int avatar;

    @Column(name = "cookie", nullable = false)
    private String cookie;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "game_room_id")
    private GameRoomEntity gameRoom;

    public PlayerUser(Long userId, String userName, int avatar, String cookie){
        this.userId = userId;
        this.userName = userName;
        this.avatar = avatar;
        this.cookie = cookie;
    }
}