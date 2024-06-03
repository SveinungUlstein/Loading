package com.example.steeringwheel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.IOException;


@SpringBootApplication
public class SteeringWheelApplication {

    @Autowired
    private SteeringWheelService steeringWheelService;

    public static void main(String[] args) {
        SpringApplication.run(SteeringWheelApplication.class, args);
    }
}


