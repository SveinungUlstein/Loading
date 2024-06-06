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
@Table(name = "ADMINQUESTIONS")
public class SaveImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "ADMIN_QUESTION_ID")
    private Long adminQuestionId;
    @Lob
    @Column(name = "ADMIN_QUESTION_IMAGE")
    private byte [] adminQuestionImage;
}

