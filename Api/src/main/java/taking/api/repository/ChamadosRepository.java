package taking.api.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import taking.api.dto.ChamadosRespostaDTO;
import taking.api.model.Chamados;
import taking.api.model.Usuarios;
//import taking.api.model.UsuariosAdm;
//import taking.api.model.UsuariosAdmChamados;

public interface ChamadosRepository extends JpaRepository<Chamados, Long> {

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query("update Chamados c set c.status = :status where c.id = :id")
	void updateStatus(@Param("status") String status, @Param("id") Long id);
	
	@Query(value = "select * from Chamados where usuario_id = ?", nativeQuery = true)
	List<Chamados> listaTodos(@Param("id") Long id);
	
	Optional<Chamados> findById(Long id);
	
//	boolean existsById(Long userId);
	
	Page<Chamados> findAll(Pageable pageable);
	
	Page<ChamadosRespostaDTO> findByUsuario(Optional<Usuarios> optional, Pageable pageable);
	
	List<Chamados> findByIdAndUsuario(Long id, Usuarios adm);
	
	boolean existsByIdAndUsuario(Long id, Optional<Usuarios> adm);

	Page<ChamadosRespostaDTO> findById(Long id, Pageable paginacao);
	
}
