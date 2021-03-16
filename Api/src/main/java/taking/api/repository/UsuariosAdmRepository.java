/*package taking.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;

@Repository
public interface UsuariosAdmRepository extends JpaRepository<UsuariosAdm, Long> {
	
	UsuariosAdm findByEmail(String email);

	boolean existsByEmail(String email);
	
	Optional<UsuariosAdm> findById(Long id);
}*/