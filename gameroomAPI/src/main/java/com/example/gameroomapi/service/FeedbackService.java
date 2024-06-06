package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Feedback;
import com.example.gameroomapi.repo.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {
    private final FeedbackRepo feedbackRepo;

    @Autowired public FeedbackService(FeedbackRepo feedbackRepo){
        this.feedbackRepo = feedbackRepo;
    }
    public List<Feedback> getAllFeedbacks(){
        return feedbackRepo.findAll();
    }
    public Optional<Feedback> getFeedbackById(Long id){
        return feedbackRepo.findById(id);
    }
    public Feedback createFeedback(Feedback feedback){
        return feedbackRepo.save(feedback);
    }
    public Feedback updateFeedback(Long id, Feedback feedbackDetails){
        Feedback feedback = feedbackRepo.findById(id).orElseThrow(() -> new RuntimeException("Feedback no id i think:3"+ id));
        feedback.setFeedbackTxt(feedbackDetails.getFeedbackTxt());
        feedback.setStars(feedbackDetails.getStars());
        return feedbackRepo.save(feedback);
    }
    public void deleteFeedback(Long id) {
        Feedback feedback = feedbackRepo.findById(id).orElseThrow(() -> new RuntimeException("Feedback not found with id " + id));
        feedbackRepo.delete(feedback);
    }
}
