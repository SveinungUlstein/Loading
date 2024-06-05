package com.example.gameroomapi.repo;
import com.example.gameroomapi.model.PlayerUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PlayerUserRepo extends JpaRepository<PlayerUser, Long> {
}
