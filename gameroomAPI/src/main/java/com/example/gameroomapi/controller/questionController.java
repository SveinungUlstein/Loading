package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.model.Questions;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.service.choiceService;
import com.example.gameroomapi.service.votesService;
import com.example.gameroomapi.service.questionService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class questionController {

    @Autowired
    private questionService questionService;

    @GetMapping()
    public ResponseEntity<List<Questions>> getAllQuestions() {
        List<Questions> allQuestions = questionService.getAllQuestions();
        return ResponseEntity.ok(allQuestions);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createQuestion(@RequestBody String payload) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode rootNode = objectMapper.readTree(payload);
            JsonNode questionNode = rootNode.get("question");

            if (questionNode == null) {
                return ResponseEntity.badRequest().body("Invalid payload");
            }

            Questions question = objectMapper.treeToValue(questionNode, Questions.class);
            questionService.saveQuestion(question);
            return ResponseEntity.status(HttpStatus.CREATED).body("Question created successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing payload");
        }
    }
}
