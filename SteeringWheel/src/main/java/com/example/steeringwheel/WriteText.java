package com.example.steeringwheel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "QUESTIONS")

public class WriteText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String questionTxt;
}