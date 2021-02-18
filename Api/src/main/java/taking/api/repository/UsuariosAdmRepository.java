package taking.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.UsuariosAdm;

@Repository
public interface UsuariosAdmRepository extends JpaRepository<UsuariosAdm, Long> {
	
	UsuariosAdm findByEmail(String email);
	
	<CadastroUsuario extends UsuariosAdm> CadastroUsuario save(CadastroUsuario usuario);
}