package com.example.gameroomapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long questionId;

    @Column(name = "questionTxt", nullable = true)
    private String questionTxt;

    @Column(name = "questionImage", nullable = true)
    private byte[] questionImage;

    @Column(name = "time", nullable = true)
    private int time;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "playId", nullable = true)
    private Play play;

    @OneToMany(mappedBy = "questions", orphanRemoval = true)
    private List<Choices> choices;

    public Questions(String questionTxt, byte[] questionImage, int time, Play play){
        this.questionTxt = questionTxt;
        this.questionImage = questionImage;
        this.time = time;
        this.play = play;
    }
}