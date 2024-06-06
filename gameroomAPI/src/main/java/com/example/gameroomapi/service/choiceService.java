package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.model.Questions;
import com.example.gameroomapi.repo.ChoicesRepo;
import com.example.gameroomapi.repo.QuestionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class choiceService {

    @Autowired
    private ChoicesRepo choicesRepo;

    @Autowired
    private QuestionsRepo questionRepo;
    public Optional<Choices> getChoiceById(Long id) {
        return choicesRepo.findById(id);
    }

    public void saveChoice(Choices choice, Long questionId) {
        Optional<Questions> questionOptional = questionRepo.findById(questionId);
        if (questionOptional.isPresent()) {
            choice.setQuestions(questionOptional.get());
            choicesRepo.save(choice);
        } else {
            throw new IllegalArgumentException("Question with ID " + questionId + " not found");
        }
    }

    public List<Choices> getAllChoices() {
        return choicesRepo.findAll();
    }
}