package com.example.gameroomapi.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity

public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feedback_seq_gen")
    @SequenceGenerator(name = "feedback_seq_gen", sequenceName = "feedback_seq",allocationSize = 1)
    @Column(name = "feedbackId",nullable = true, columnDefinition = "bigint default 0")
    private Long feedbackID;

    @Column(name = "feedbackTxt",nullable = true)
    private String feedbackTxt;

    @Column(name = "stars",nullable = false)
    private int stars;

    public Feedback(String feedbackTxt, int stars){
        this.feedbackTxt = feedbackTxt;
        this.stars = stars;
    }
}
