package com.example.gameroomapi.model;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "QUESTIONS")
public class SaveImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "QUESTION_ID")
    private Long questionId;
    @Lob
    @Column(name = "QUESTION_IMAGE")
    private byte [] questionImage;
}
