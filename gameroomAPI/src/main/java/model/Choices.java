package model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity

public class Choices {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "choices_seq_gen")
    @SequenceGenerator(name = "choices_seq_gen",sequenceName = "choices_seq",allocationSize = 1)
    @Column(name = "choiceID",nullable = false)
    private Long choiceID = 0L;

    @Column(name = "choiceTxt",nullable = false)
    private String choiceTxt;

    @Lob
    @Column(name = "choiceImage",nullable = false)
    private byte[] choiceImage;

  //join qID
    public Choices(String choiceTxt, byte[] choiceImage){
        this.choiceTxt = choiceTxt;
        this.choiceImage = choiceImage;
    }
}
