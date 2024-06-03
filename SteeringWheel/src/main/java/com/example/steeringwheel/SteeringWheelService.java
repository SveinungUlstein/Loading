package com.example.steeringwheel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class SteeringWheelService {

    @Autowired
    private SteeringWheelRepository steeringWheelRepository;

    public SteeringWheelEntity createSteeringWheel() {
        SteeringWheelEntity steeringWheel = new SteeringWheelEntity();
        steeringWheel.setId(UUID.randomUUID().toString());
        steeringWheel.setActive(true);
        steeringWheel.setQrCodeData("http://localhost:8080/GameRoom/status/" + steeringWheel.getId());
        return steeringWheelRepository.save(steeringWheel);
    }

    public boolean isSteeringWheelActive(String id) {
        return steeringWheelRepository.findById(id).map(SteeringWheelEntity::isActive).orElse(false);
    }

    public void finishSteeringWheel(String id) {
        steeringWheelRepository.findById(id).ifPresent(wheel -> {
            wheel.setActive(false);
            steeringWheelRepository.save(wheel);
        });
    }
}
