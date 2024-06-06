package com.example.gameroomapi.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity

public class SteeringWheelEntity {

    @Id
    private String id;

    private boolean active;

    public void setId(String id) {
        this.id = id;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
