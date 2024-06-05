package com.example.gameroomapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity
public class Choices {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "choices_seq_gen")
    @SequenceGenerator(name = "choices_seq_gen", sequenceName = "choices_seq", allocationSize = 1)
    @Column(name = "choiceId", nullable = false)
    private Long choiceId;

    @Column(name = "choiceTxt", nullable = false)
    private String choiceTxt;

    @Lob
    @Column(name = "choiceImage", nullable = false)
    private byte[] choiceImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionId", nullable = false)
    private Questions questions;

    public Choices(String choiceTxt, byte[] choiceImage, Questions questions) {
        this.choiceTxt = choiceTxt;
        this.choiceImage = choiceImage;
        this.questions = questions;
    }
}