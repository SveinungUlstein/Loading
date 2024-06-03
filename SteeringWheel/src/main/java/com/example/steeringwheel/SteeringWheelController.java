package com.example.steeringwheel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
