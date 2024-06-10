package com.example.gameroomapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Votes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "votes_seq_gen")
    @SequenceGenerator(name = "votes_seq_gen", sequenceName = "votes_seq", allocationSize = 1)
    @Column(name = "voteId", nullable = false)
    private Long voteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private PlayerUser playerUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "choiceId", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Choices choice;

    public Votes(PlayerUser playerUser, Choices choice) {
        this.playerUser = playerUser;
        this.choice = choice;
    }
}