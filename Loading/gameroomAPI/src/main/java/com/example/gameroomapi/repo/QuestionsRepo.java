package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface QuestionsRepo extends JpaRepository<Questions, Long> {

}
