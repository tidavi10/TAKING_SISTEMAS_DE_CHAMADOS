package taking.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.Usuarios;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{
	
	List<Usuarios> findAll();
	
	Usuarios findByEmail(String email);
	
	Usuarios findByUsername(String username);
	
	Optional<Usuarios> findById(Long id);
	
	<CadastroUsuario extends Usuarios> CadastroUsuario save(CadastroUsuario usuario);
	
	String findBySenha(String senha);

	
}