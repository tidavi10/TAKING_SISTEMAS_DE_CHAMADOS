package taking.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.Usuarios;

import java.util.List;

@Repository
public interface UsuariosRepository extends CrudRepository<Usuarios, Long>{
	
	List<Usuarios> findAll();
	
	Usuarios findByUsername(String username);
	
	<CadastroUsuario extends Usuarios> CadastroUsuario save(CadastroUsuario usuario);

	
}