package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.PlayerUser;
import com.example.gameroomapi.service.playerUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playerUser")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class playerUserController {

    @Autowired
    private playerUserService playerUserService;

    @GetMapping
    public ResponseEntity<List<PlayerUser>> getAllPlayerUsers() {
        List<PlayerUser> players = playerUserService.getAllPlayerUsers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerUser> getPlayerUserById(@PathVariable Long id) {
        PlayerUser player = playerUserService.getPlayerUserById(id);
        return player != null ? ResponseEntity.ok(player) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<PlayerUser> createPlayerUser(@RequestBody PlayerUser playerUser) {
        String generatedCookie = generateCookieValue();
        playerUser.setCookie(generatedCookie);
        PlayerUser createdPlayer = playerUserService.savePlayerUser(playerUser);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<PlayerUser> updatePlayerUser(@PathVariable Long id, @RequestBody PlayerUser playerUser) {
        PlayerUser updatedPlayer = playerUserService.updatePlayerUser(id, playerUser);
        return updatedPlayer != null ? ResponseEntity.ok(updatedPlayer) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayerUser(@PathVariable Long id) {
        boolean deleted = playerUserService.deletePlayerUser(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
    private String generateCookieValue() {
        return java.util.UUID.randomUUID().toString();
    }
}