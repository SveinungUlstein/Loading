package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Feedback;
import com.example.gameroomapi.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Feedback")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class FeedbackController {
    private final FeedbackService feedbackService;
    @Autowired
    public FeedbackController(FeedbackService feedbackService){
        this.feedbackService = feedbackService;
    }
    @GetMapping
    public List<Feedback> getAllFeedbacks(){
        return feedbackService.getAllFeedbacks();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id){
    return feedbackService.getFeedbackById(id)
        .map(ResponseEntity::ok)
    .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public Feedback createFeedback(@ModelAttribute Feedback feedback){
        return feedbackService.createFeedback(feedback);
    }
    @PostMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback (@PathVariable Long id, @ModelAttribute Feedback feedbackDetails){
        try{
            Feedback updatedFeedback = feedbackService.updateFeedback(id,feedbackDetails);
            return ResponseEntity.ok(updatedFeedback);
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id){
        try{
            feedbackService.deleteFeedback(id);
            return ResponseEntity.noContent().build();
        }catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
