package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Questions;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.service.choiceService;
import com.example.gameroomapi.service.votesService;
import com.example.gameroomapi.service.questionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class questionController {

    @Autowired
    private votesService votesService;

    @Autowired
    private choiceService choiceService;

    @Autowired
    private questionService questionService;


    @GetMapping("/all")
    public ResponseEntity<List<Questions>> getAllQuestions() {
        List<Questions> allQuestions = questionService.getAllQuestions();
        return ResponseEntity.ok(allQuestions);
    }
}
