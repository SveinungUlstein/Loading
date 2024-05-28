package com.example.gameroomapi;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;
import com.google.zxing.WriterException;

@SpringBootApplication
public class GameroomApiApplication {

    @Autowired
    private GameRoomService gameRoomService;

    public static void main(String[] args) {
        SpringApplication.run(GameroomApiApplication.class, args);
    }

    @PostConstruct
    public void createEmptyRoomWithQrCode() {
        GameRoomEntity emptyRoom = gameRoomService.createGameRoom();
        generateQRCode(emptyRoom.getQrCodeData());
    }

    private synchronized void generateQRCode(String text) {
        try {
            QrCodeGenerator.generateQRCodeImage(text, 350, 350, "./MyQRCode.png");
        } catch (WriterException | IOException e) {
            System.out.println("Could not generate QR Code: " + e.getMessage());
        }
    }
}