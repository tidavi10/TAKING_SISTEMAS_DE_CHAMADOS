package taking.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.Usuarios;

import java.util.List;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{
	
	List<Usuarios> findAll();
	
	Usuarios findByEmail(String email);
	
	<CadastroUsuario extends Usuarios> CadastroUsuario save(CadastroUsuario usuario);

	
}