package com.example.gameroomapi.repo;

import com.example.gameroomapi.model.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminUserRepo extends JpaRepository<AdminUser, Long> {

}
