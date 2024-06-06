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
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
public class websocketHandler extends TextWebSocketHandler {

    private final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private final ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

    @Autowired
    private com.example.gameroomapi.service.votesService votesService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        String sessionId = session.getId();
        sessions.put(sessionId, session);
        log.info("yahooo! connection", sessionId);
        executor.scheduleAtFixedRate(() -> sendPing(session), 0, 120, TimeUnit.SECONDS);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        super.handleTransportError(session, exception);
        log.error("cant send messaging pigeon :(", session.getId(), exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        String sessionId = session.getId();
        sessions.remove(sessionId);
        log.info("no more session :(", sessionId);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session, message);
        String payload = message.getPayload();
        Votes vote = parseVote(payload);
        if (vote != null) {
            votesService.saveVote(vote);
            votesService.showVote();
        }
    }

    private Votes parseVote(String payload) {
        long userId = votesService.getUserIdFromPayload(payload);
        long choiceId = votesService.getChoiceIdFromPayload(payload);
        Optional<Votes> voteOptional = votesService.getVoteById(choiceId);
        return voteOptional.orElse(null);
    }

    private void sendPing(WebSocketSession session) {
        try {
            session.sendMessage(new TextMessage("ping"));
        } catch (IOException e) {
            log.error("no more user :(", session.getId(), e);
        }
    }
}