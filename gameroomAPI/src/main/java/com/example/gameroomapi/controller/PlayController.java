package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.Play;
import com.example.gameroomapi.service.PlayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/Play")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class PlayController {
    private final PlayService playService;

    @Autowired
    public PlayController(PlayService playService){
        this.playService = playService;
    }
    @GetMapping
    public List<Play> getAllPlays(){
        return playService.getAllPlays();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Play> getPlayById(@PathVariable Long id){
        return playService.getPlayById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<Play> createPlay (@RequestParam("playName") String playName, @RequestParam("playDescription") String playDescription, @RequestParam(value = "playImage",required = false)MultipartFile playImage) throws IOException{
        Play play = new Play();
        play.setPlayName(playName);
        play.setPlayDescription(playDescription);
        if (playImage != null && !playImage.isEmpty()){
            play.setPlayImage(playImage.getBytes());
        }
        Play createdPlay = playService.createPlay(play);
        return ResponseEntity.ok(createdPlay);
    }
    @PostMapping("/{id}")
    public ResponseEntity<Play> updatePlay(@PathVariable Long id, @RequestParam("playname") String playName, @RequestParam("playDescription") String playDescription,@RequestParam(value = "playImage",required = false) MultipartFile playImage) throws IOException{
        Play playDetails = new Play();
        playDetails.setPlayName(playName);
        playDetails.setPlayDescription(playDescription);
        if (playImage != null && !playImage.isEmpty()){
            playDetails.setPlayImage(playImage.getBytes());
        }
        try {
            Play updatedPlay = playService.updatePlay(id, playDetails);
            return ResponseEntity.ok(updatedPlay);
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlay(@PathVariable Long id){
        try {
            playService.deletePlay(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
