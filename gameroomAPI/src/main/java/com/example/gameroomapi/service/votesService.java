package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.repo.VotesRepo;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class votesService {

    @Autowired
    private VotesRepo votesRepo;

    @Autowired
    private choiceService choiceService;

    public void saveVote(Votes vote) {
        votesRepo.save(vote);
    }

    public Optional<Votes> getVoteById(Long id) {
        return votesRepo.findById(id);
    }

    @Transactional
    public List<Votes> getAllVotes() {
        List<Votes> votes = votesRepo.findAll();
        votes.forEach(vote -> {
            vote.getPlayerUser().getUserId();
            vote.getChoice().getChoiceId();
        });
        return votes;
    }

    public List<Votes> getVotesByUserId(Long userId) {
        return votesRepo.findAll().stream()
                .filter(vote -> vote.getPlayerUser().getUserId().equals(userId))
                .collect(Collectors.toList());
    }

    public Map<Long, Long> voteCounter() {
        List<Votes> allVotes = getAllVotes();
        return allVotes.stream()
                .collect(Collectors.groupingBy(vote -> vote.getChoice().getChoiceId(), Collectors.counting()));
    }

    public Votes showVote() {
        Map<Long, Long> voteMap = voteCounter();
        Optional<Map.Entry<Long, Long>> mostVotedEntry = voteMap.entrySet().stream()
                .max(Map.Entry.comparingByValue());
        if (mostVotedEntry.isPresent()) {
            Long mostVotedChoiceId = mostVotedEntry.get().getKey();
            return getAllVotes().stream()
                    .filter(vote -> vote.getChoice().getChoiceId().equals(mostVotedChoiceId))
                    .findFirst()
                    .orElse(null);
        }
        return null;
    }

    public long getUserIdFromPayload(String payload) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(payload);
            return rootNode.get("userId").asLong();
        } catch (IOException e) {
            e.printStackTrace();
            return -1;
        }
    }

    public long getChoiceIdFromPayload(String payload) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(payload);
            return rootNode.get("choiceId").asLong();
        } catch (IOException e) {
            e.printStackTrace();
            return -1;
        }
    }
}