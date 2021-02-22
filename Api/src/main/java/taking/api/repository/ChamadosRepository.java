package taking.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import taking.api.model.Chamados;

public interface ChamadosRepository extends JpaRepository<Chamados, Long> {

	Optional<Chamados> findById(Long id);
}
