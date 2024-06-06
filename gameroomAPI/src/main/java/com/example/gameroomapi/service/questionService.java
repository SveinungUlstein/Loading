package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Questions;
import com.example.gameroomapi.repo.QuestionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class questionService {
    @Autowired
    private QuestionsRepo questionRepo;

    public List<Questions> getAllQuestions() {
        return questionRepo.findAll();
    }

    public Questions saveQuestion(Questions questions) {
       return questionRepo.save(questions);
    }
}

