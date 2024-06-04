package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.Play;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PlayRepo extends JpaRepository<Play, Long>{

}
