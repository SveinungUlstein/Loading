package com.example.gameroomapi;

import com.example.gameroomapi.GameRoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRoomRepository extends JpaRepository<GameRoomEntity, String> {
}