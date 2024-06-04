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

    //join UserId and ChoiceId

}
