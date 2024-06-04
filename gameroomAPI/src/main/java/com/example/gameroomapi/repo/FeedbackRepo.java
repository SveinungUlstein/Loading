package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

}