package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.repo.VotesRepo;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@Service
public class votesService {

    @Autowired
    private VotesRepo votesRepo;

    public void saveVote(Votes vote) {
        votesRepo.save(vote);
    }

    public Optional<Votes> getVoteById(Long id) {
        return votesRepo.findById(id);
    }

    public List<Votes> getAllVotes() {
        return votesRepo.findAll();
    }

    private void voteCounter(int choice){

    }

    public void showVote(){

    }

    public long getUserIdFromPayload(String payload){
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(payload);
            long userId = rootNode.get("userId").asLong();

            return userId;
        } catch (IOException e) {
            e.printStackTrace();
            return -1;
        }
    }

    public long getChoiceIdFromPayload(String payload) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(payload);
            long choiceId = rootNode.get("choiceId").asLong();

            return choiceId;
        } catch (IOException e) {
            e.printStackTrace();
            return -1;
        }
    }}