package repo;
import model.Choices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChoicesRepo extends JpaRepository<Choices, Long>{

}
