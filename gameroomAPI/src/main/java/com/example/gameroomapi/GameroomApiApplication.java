package com.example.gameroomapi;

import com.example.gameroomapi.model.AdminUser;
import com.example.gameroomapi.model.Choices;
import com.example.gameroomapi.model.Feedback;
import com.example.gameroomapi.model.GameRoomEntity;
import com.example.gameroomapi.repo.AdminUserRepo;
import com.example.gameroomapi.repo.ChoicesRepo;
import com.example.gameroomapi.repo.FeedbackRepo;
import com.example.gameroomapi.service.GameRoomService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;
import com.google.zxing.WriterException;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class GameroomApiApplication {

    @Autowired
    private GameRoomService gameRoomService;

    public static void main(String[] args) {
                SpringApplication.run(GameroomApiApplication.class, args);
    }
//kukeri
    @PostConstruct
    public void createEmptyRoomWithQrCode() {
        GameRoomEntity emptyRoom = gameRoomService.createGameRoom();
        generateQRCode(emptyRoom.getQrCodeData());
    }

    private synchronized void generateQRCode(String text) {
        try {
            String filePath = "MyQRCode.png";
            QrCodeGenerator.generateQRCodeImage(text, 350, 350, filePath);
            System.out.println("QR Code generated at " + filePath);
        } catch (WriterException | IOException e) {
            System.out.println("Could not generate QR Code: " + e.getMessage());
        }
    }
}