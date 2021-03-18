package taking.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import taking.api.model.TipoProblema;

public interface TipoProblemaRepository extends JpaRepository<TipoProblema, Long>{
	
	Optional<TipoProblema> findById(Long id);
}