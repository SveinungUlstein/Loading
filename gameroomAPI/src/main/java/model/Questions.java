package model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity

public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "questions_seq_gen")
    @SequenceGenerator(name = "questions_seq_gen",sequenceName = "questions_seq",allocationSize = 1)
    @Column(name = "questionId",nullable = false)
    private long questionId = 0L;

    @Column(name = "questionTxt",nullable = false)
    private String questionTxt;

    @Column(name = "questionImage",nullable = false)
    private byte[] questionImage;

    @Column(name = "time",nullable = false)
    private int time;
        //join play id

    public Questions (String questionTxt, byte[] questionImage, int time){
        this.questionTxt = questionTxt;
        this.questionImage = questionImage;
        this. time = time;
    }
}
