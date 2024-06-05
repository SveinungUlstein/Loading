package com.example.gameroomapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Feedback")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class FeedbackController {
}
