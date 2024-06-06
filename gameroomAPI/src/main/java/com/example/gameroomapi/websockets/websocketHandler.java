package com.example.gameroomapi.websockets;

import com.example.gameroomapi.model.Votes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
public class websocketHandler extends TextWebSocketHandler {

    private final ConcurrentHashMap<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private final ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

    @Autowired
    private com.example.gameroomapi.service.votesService votesService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        String sessionId = session.getId();
        sessions.put(sessionId, session);
        log.info("pigeon recieved", sessionId);
        executor.scheduleAtFixedRate(() -> sendPing(session), 0, 120, TimeUnit.SECONDS);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        super.handleTransportError(session, exception);
        log.error("silly pigeon no wings :(", session.getId(), exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        String sessionId = session.getId();
        sessions.remove(sessionId);
        log.info("messenger pigeon dead :(", sessionId);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session, message);
        String payload = message.getPayload();
        Votes vote = parseVote(payload);
        if (vote != null) {
            votesService.saveVote(vote);
            Votes updatedVote = votesService.showVote();
            broadcastVote(updatedVote);
        }
    }

    private Votes parseVote(String payload) {
        long userId = votesService.getUserFromPayload(payload);
        long choiceId = votesService.getChoiceFromPayload(payload);
        return votesService.getVoteById(choiceId).orElse(null);
    }

    private void sendPing(WebSocketSession session) {
        try {
            session.sendMessage(new TextMessage("ping"));
        } catch (IOException e) {
            log.error("couldnt ping ff15 go next :(", session.getId(), e);
        }
    }

    private void broadcastVote(Votes vote) {
        TextMessage message = new TextMessage(vote.toString());
        sessions.forEach((sessionId, session) -> {
            try {
                session.sendMessage(message);
            } catch (IOException e) {
                log.error("couldnt send vote :(", sessionId, e);
            }
        });
    }
}