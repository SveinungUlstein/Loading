package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.GameRoomEntity;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.service.votesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:5173")
public class votesController {

    @Autowired
    private votesService votesService;

    @GetMapping("/votes")
    public ResponseEntity<List<Votes>> getAllVotes() {
        List<Votes> allVotes = votesService.getAllVotes();
        return new ResponseEntity<>(allVotes, HttpStatus.OK);
    }
}
