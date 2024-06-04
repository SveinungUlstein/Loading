package com.example.gameroomapi.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@NoArgsConstructor
@Entity
public class AdminUser {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "adminUser_seq_gen")
    @SequenceGenerator(name = "adminUser_seq_gen",sequenceName = "adminUser_seq",allocationSize = 1)
    @Column(name = "username",nullable = false)
    private Long username = 0L;

    @Column(name = "password",nullable = false)
    private String password;

}