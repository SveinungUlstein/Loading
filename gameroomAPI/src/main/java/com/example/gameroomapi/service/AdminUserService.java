package com.example.gameroomapi.service;

import com.example.gameroomapi.model.AdminUser;
import com.example.gameroomapi.repo.AdminUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminUserService {
    @Autowired
    private AdminUserRepo adminUserRepo;
    public Optional<AdminUser> authenticate(String username, String password) {
        Optional<AdminUser> user = adminUserRepo.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
