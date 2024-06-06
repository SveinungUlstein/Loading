package com.example.gameroomapi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ADMINQUESTIONS")

public class WriteText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "ADMIN_QUESTION_ID")
    private Long adminQuestionId;

    @Column(name = "ADMIN_QUESTION_TXT")
    private String adminQuestionTxt;
}

