package com.example.gameroomapi.service;

import com.example.gameroomapi.model.Play;
import com.example.gameroomapi.repo.PlayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayService {
    private final PlayRepo playRepo;

    @Autowired
    public PlayService(PlayRepo playRepo){
        this.playRepo = playRepo;
    }
    public List<Play> getAllPlays(){
        return playRepo.findAll();
    }
    public Optional<Play> getPlayById(Long id){
        return playRepo.findById(id);
    }
    public Play createPlay(Play play){
        return playRepo.save(play);
    }
    public Play updatePlay(Long id, Play playDetails){
        Play play = playRepo.findById(id).orElseThrow(()-> new RuntimeException("Play no ID found lol lol"+ id));

        play.setPlayName(playDetails.getPlayName());
        play.setPlayDescription(playDetails.getPlayDescription());
        play.setPlayImage(playDetails.getPlayImage());

        return playRepo.save(play);
    }
    public void deletePlay(Long id){
        Play play = playRepo.findById(id).orElseThrow(()-> new RuntimeException("Play no ID found lol lol"+ id));
        playRepo.delete(play);
    }
}
