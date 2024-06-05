package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.SaveImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaveImageRepository extends JpaRepository<SaveImage, Long> {
}
