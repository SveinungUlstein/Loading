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
    @Column(name = "choiceId", nullable = false, columnDefinition = "bigint default 0")
    private Long choiceId;

    @Column(name = "choiceTxt",nullable = true)
    private String choiceTxt;

    @Lob
    @Column(name = "choiceImage",nullable = true)

    private byte[] choiceImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "questionId",nullable = true)

    private Questions questions;

    public Choices(Long choiceId, String choiceTxt, byte[] choiceImage, Questions questions) {
        this.choiceId = choiceId;
        this.choiceTxt = choiceTxt;
        this.choiceImage = choiceImage;
        this.questions = questions;
    }
}