package model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity

public class Votes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "votes_seq_gen")
    @SequenceGenerator(name = "votes_seq_gen",sequenceName = "votes_seq",allocationSize = 1)
    @Column(name = "voteId",nullable = false)
    private long voteId = 0L;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId",nullable = false)
    private PlayerUser playerUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "choiceId",nullable = false)
    private Choices choice;

    public Votes(PlayerUser playerUser, Choices choice){
        this.playerUser = playerUser;
        this.choice = choice;
    }



}
