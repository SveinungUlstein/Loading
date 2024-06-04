package com.example.steeringwheel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WriteTextRepository extends JpaRepository<WriteText, Long> {

}
