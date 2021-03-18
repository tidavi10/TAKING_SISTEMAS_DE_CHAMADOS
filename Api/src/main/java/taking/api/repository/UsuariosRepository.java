package taking.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import taking.api.model.Chamados;
import taking.api.model.Usuarios;
//import taking.api.model.UsuariosAdm;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{
	
	List<Usuarios> findAll();
	
	Usuarios findByEmail(String email);
	
	boolean existsByEmailAndIsAdm(String email, boolean adm);
	
	boolean existsByEmail(String email);
	
	Optional<Usuarios> findById(Long id);
	
	Optional<Usuarios> findByIdAndIsAdm(Long id, boolean isAdm);
	
	<CadastroUsuario extends Usuarios> CadastroUsuario save(CadastroUsuario usuario);
	
	String findBySenha(String senha);
	
	List<Usuarios> findByIsAdm(boolean isAdm);
	
}