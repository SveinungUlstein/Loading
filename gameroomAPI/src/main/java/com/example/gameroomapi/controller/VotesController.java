package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.service.choiceService;
import com.example.gameroomapi.service.votesService;
import com.example.gameroomapi.service.playerUserService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class VotesController {

    @Autowired
    private votesService votesService;

    @Autowired
    private choiceService choiceService;

    @Autowired
    private playerUserService playerUserService;


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

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Votes>> getVotesByUserId(@PathVariable Long userId) {
        List<Votes> userVotes = votesService.getVotesByUserId(userId);
        return ResponseEntity.ok(userVotes);
    }

    @PostMapping("/cast")
    public ResponseEntity<String> castVote(@RequestBody String payload) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode rootNode = objectMapper.readTree(payload);
            long userId = rootNode.get("userId").asLong();
            long choiceId = rootNode.get("choiceId").asLong();
            if (userId == -1 || choiceId == -1) {
                return ResponseEntity.badRequest().body("none of these mfs ecist");
            }
            PlayerUser playerUser = playerUserService.getPlayerUserById(userId);
            if (playerUser == null) {
                return ResponseEntity.badRequest().body("player dont ecist");
            }
            Choices choice = choiceService.getChoiceById(choiceId).orElse(null);
            if (choice == null) {
                return ResponseEntity.badRequest().body("cant choose that");
            }
            Votes vote = new Votes(playerUser, choice);
            votesService.saveVote(vote);
            return ResponseEntity.ok("pls work");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("why tf did u not work");
        }
    }
}
