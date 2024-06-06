package com.example.gameroomapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "ADMINQUESTIONS")

public class WriteText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long adminQuestionId;

    private String adminQuestionTxt;
}
