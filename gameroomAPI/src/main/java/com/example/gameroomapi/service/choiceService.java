package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.model.Votes;
import com.example.gameroomapi.repo.ChoicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class choiceService {

    @Autowired
    private ChoicesRepo choicesRepo;

    public Optional<Choices> getChoiceById(Long id) {
        return choicesRepo.findById(id);
    }

    public void saveChoice(Choices choice) {
        choicesRepo.save(choice);
    }
}