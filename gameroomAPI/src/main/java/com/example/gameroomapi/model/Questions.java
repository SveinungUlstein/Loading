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
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "questions_seq_gen")
    @SequenceGenerator(name = "questions_seq_gen", sequenceName = "questions_seq", allocationSize = 1)
    @Column(name = "questionId", nullable = false)
    private long questionId = 0L;

    @Column(name = "questionTxt", nullable = false)
    private String questionTxt;

    @Column(name = "questionImage", nullable = false)
    private byte[] questionImage;

    @Column(name = "time", nullable = false)
    private int time;

    // join play id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "playId", nullable = false)
    private Play play;

    @OneToMany(mappedBy = "questions", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Choices> choices;

    public Questions(String questionTxt, byte[] questionImage, int time, Play play){
        this.questionTxt = questionTxt;
        this.questionImage = questionImage;
        this.time = time;
        this.play = play;
    }
}