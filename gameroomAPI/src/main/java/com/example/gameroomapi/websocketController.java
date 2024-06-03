package com.example.gameroomapi;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class websocketController {
    @MessageMapping("/lobby")
    @SendTo("/gameroom/lobby")
    public String handleLogin(String userId) {
        return userId;
    }
}
