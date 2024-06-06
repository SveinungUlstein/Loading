package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.AdminUser;
import com.example.gameroomapi.service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/AdminUser")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AdminUserController {
    @Autowired
    private AdminUserService adminUserService;

    @GetMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestParam String username, @RequestParam String password) {
        Map<String, String> response = new HashMap<>();
        Optional<AdminUser> user = adminUserService.authenticate(username, password);
        if (user.isPresent()) {
            response.put("message", "Login successful");
            response.put("username", user.get().getUsername());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(401).body(response);
        }
    }


}
