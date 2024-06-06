package com.example.gameroomapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "QUESTIONS")

public class WriteText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long questionId;

    private String questionTxt;
}
