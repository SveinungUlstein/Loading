package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.WriteText;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WriteTextRepository extends JpaRepository<WriteText, Long> {

}
