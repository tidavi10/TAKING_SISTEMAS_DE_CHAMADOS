package taking.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import taking.api.dto.ChamadosRespostaDTO;
import taking.api.model.Chamados;
import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdmChamados;

public interface UsuariosAdmChamadosRepository extends JpaRepository<UsuariosAdmChamados, Long>{

	Page<ChamadosRespostaDTO> findByAdmsId(Long id, Pageable pageable);
	
	List<ChamadosRespostaDTO> findByAdmsIdAndChamadosId(Long adm, Long chamado);

	boolean existsByAdmsIdAndChamadosId(Long adm, Long id);
}
