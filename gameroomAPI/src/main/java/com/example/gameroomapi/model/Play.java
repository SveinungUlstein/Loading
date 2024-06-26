package com.example.gameroomapi.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity

public class Play {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "play_seq_gen")
    @SequenceGenerator(name = "play_seq_gen",sequenceName = "play_seq",allocationSize = 1)
    @Column(name = "playId",nullable = false)
    private Long playId;

    @Column(name = "playName",nullable = false)
    private String playName;

    @Column(name = "playDescription",nullable = false)
    private String playDescription;

    @Lob
    @Column(name = "playImage",nullable = true)
    private byte[] playImage;

    @OneToMany(mappedBy = "play",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Questions> questions;

    public Play(String playName,String playDescription, byte[] playImage){
        this.playName = playName;
        this.playDescription = playDescription;
        this.playImage = playImage;
    }

}
