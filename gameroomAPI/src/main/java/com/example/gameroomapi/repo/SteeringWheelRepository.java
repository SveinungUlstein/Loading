package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.SteeringWheelEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SteeringWheelRepository extends JpaRepository<SteeringWheelEntity, String> {
}
