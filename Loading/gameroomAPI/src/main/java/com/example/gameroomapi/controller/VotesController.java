package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.service.choiceService;
import com.example.gameroomapi.service.votesService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:5173")
public class VotesController {

    @Autowired
    private votesService votesService;

    @Autowired
    private choiceService choiceService;

    @GetMapping()
    public ResponseEntity<List<Votes>> getAllVotes() {
        List<Votes> allVotes = votesService.getAllVotes();
        return ResponseEntity.ok(allVotes);
    }

    @GetMapping("/most-voted")
    public ResponseEntity<Votes> showMostVoted() {
        Votes mostVoted = votesService.showVote();
        return ResponseEntity.ok(mostVoted);
    }

    @PostMapping("/cast")
    public ResponseEntity<String> castVote(@RequestBody String payload) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode rootNode = objectMapper.readTree(payload);
            long userId = rootNode.get("userId").asLong();
            long choiceId = rootNode.get("choiceId").asLong();
            if (userId == -1 || choiceId == -1) {
                return ResponseEntity.badRequest().body("Invalid payload");
            }
            PlayerUser playerUser = new PlayerUser();
            playerUser.setUserId(userId);
            Votes vote = new Votes();
            vote.setPlayerUser(playerUser);
            vote.setChoice(choiceService.getChoiceById(choiceId).orElse(null));
            if (vote.getChoice() == null) {
                return ResponseEntity.badRequest().body("Invalid choice ID");
            }
            votesService.saveVote(vote);
            return ResponseEntity.ok("Vote cast successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing payload");
        }
    }
}