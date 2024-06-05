package com.example.steeringwheel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class SteeringWheelService {

    @Autowired
    private SteeringWheelRepository steeringWheelRepository;

    @Autowired
    private WriteTextRepository writeTextRepository;

    @Autowired
    private SaveImageRepository saveImageRepository;

    public SteeringWheelEntity createSteeringWheel() {
        SteeringWheelEntity steeringWheel = new SteeringWheelEntity();
        steeringWheel.setId(UUID.randomUUID().toString());
        steeringWheel.setActive(true);
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

    public void writeToDatabase(String text) {
        WriteText writeText = new WriteText();
        writeText.setQuestionTxt(text);
        writeTextRepository.save(writeText);
    }

    public void imageToDatabase(MultipartFile image) throws IOException{
        SaveImage saveImage = new SaveImage();
        if (image != null && !image.isEmpty()) {
            saveImage.setQuestionImage(image.getBytes());
            saveImageRepository.save(saveImage);
        }
    }
}
