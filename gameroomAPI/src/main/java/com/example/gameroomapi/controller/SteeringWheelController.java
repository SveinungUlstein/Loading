package com.example.gameroomapi.controller;

import com.example.gameroomapi.model.SteeringWheelEntity;
import com.example.gameroomapi.service.SteeringWheelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/AdminRoom")
public class SteeringWheelController {

    @Autowired
    private SteeringWheelService steeringWheelService;

    @PostMapping("/create")
    public ResponseEntity<SteeringWheelEntity> createSteeringWheel() {
        SteeringWheelEntity steeringWheel = steeringWheelService.createSteeringWheel();
        return new ResponseEntity<>(steeringWheel, HttpStatus.CREATED);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Boolean> checkSteeringWheelStatus(@PathVariable String id) {
        boolean isActive = steeringWheelService.isSteeringWheelActive(id);
        return new ResponseEntity<>(isActive, HttpStatus.OK);
    }

    @PostMapping("/finish/{id}")
    public ResponseEntity<Void> finishSteeringWheel(@PathVariable String id) {
        steeringWheelService.finishSteeringWheel(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping ("/storeText")
    public ResponseEntity<Void> storeText(@RequestParam String writeText) {
        steeringWheelService.writeToDatabase(writeText);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/storeImage")
    public ResponseEntity<Void> storeImage(@RequestParam MultipartFile image) {
        try {
            steeringWheelService.imageToDatabase(image);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
