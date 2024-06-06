package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.service.choiceService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/choices")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class choiceController {

    @Autowired
    private choiceService choiceService;

    @GetMapping
    public ResponseEntity<List<Choices>> getAllChoicesUsers() {
        List<Choices> choices = choiceService.getAllChoices();
        return new ResponseEntity<>(choices, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createChoice(@RequestBody String payload) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode rootNode = objectMapper.readTree(payload);
            JsonNode choiceNode = rootNode.get("choice");
            long questionId = rootNode.get("questionId").asLong();
            if (choiceNode == null || questionId == -1) {
                return ResponseEntity.badRequest().body("coudlnt get payload");
            }
            Choices choice = objectMapper.treeToValue(choiceNode, Choices.class);
            choiceService.saveChoice(choice, questionId);
            return ResponseEntity.status(HttpStatus.CREATED).body("holy shit it works");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("no work");
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Choices> getChoiceById(@PathVariable Long id) {
        return choiceService.getChoiceById(id)
                .map(choice -> ResponseEntity.ok().body(choice))
                .orElse(ResponseEntity.notFound().build());
    }
}