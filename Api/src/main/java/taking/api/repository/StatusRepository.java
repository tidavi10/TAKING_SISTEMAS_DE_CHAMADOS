package taking.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import taking.api.model.Status;
import taking.api.model.TipoProblema;

public interface StatusRepository extends JpaRepository<Status, Long> {
	List<Status> findAll();
}
