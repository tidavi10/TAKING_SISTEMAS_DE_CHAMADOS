package taking.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import taking.api.Usuarios;

@Repository
@Transactional
public interface UsuariosRepository extends CrudRepository<Usuarios, Long>{
	
	Usuarios findByNome(String nome);

}
