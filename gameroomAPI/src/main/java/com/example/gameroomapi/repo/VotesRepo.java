package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.Votes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface VotesRepo extends JpaRepository<Votes, Long> {
}
