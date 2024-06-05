package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.service.choiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/choices")
@CrossOrigin(origins = "http://localhost:5173")
public class choiceController {

    @Autowired
    private choiceService choiceService;

    @PostMapping("/create")
    public ResponseEntity<String> createChoice(@RequestBody Choices choice,Long questionId ) {
        choiceService.saveChoice(choice, questionId);
        return ResponseEntity.status(HttpStatus.CREATED).body("Choice created successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Choices> getChoiceById(@PathVariable Long id) {
        return choiceService.getChoiceById(id)
                .map(choice -> ResponseEntity.ok().body(choice))
                .orElse(ResponseEntity.notFound().build());
    }
}