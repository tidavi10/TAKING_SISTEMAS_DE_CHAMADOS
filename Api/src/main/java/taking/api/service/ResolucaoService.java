package taking.api.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import taking.api.exceptions.ResourceNotFoundException;
import taking.api.model.Chamados;
import taking.api.model.Resolucao;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.ResolucaoRepository;
//import taking.api.repository.UsuariosAdmChamadosRepository;
//import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;

@Service
public class ResolucaoService{

	@Autowired
	private ResolucaoRepository resolucaoRepository;
	
	@Autowired
	private ChamadosRepository chamadosRepository;
	
	//@Autowired
	//private UsuariosAdmChamadosRepository usuariosAdmChamadosRepository;
	
	public List<Resolucao> findResolucaoPaginated(int pageNo) {
		
		Pageable paginacao = PageRequest.of(pageNo, 4);
		Page<Resolucao> resultado = resolucaoRepository.findAll(paginacao);
		
		return resultado.toList();
	}
	
	/*public boolean idAndAdmExists(Long id, Long adm) {
		return usuariosAdmChamadosRepository.existsByAdmsIdAndChamadosId(adm, id);
	}*/
	
	public ResponseEntity<Resolucao> respostaChamado(Long id, Resolucao resolucao) {
			Chamados chamados = chamadosRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("chamado não encontrado"));
			resolucao.setChamados(chamados);
			resolucao.setTimestamp(new Date());
			resolucaoRepository.save(resolucao);
			chamadosRepository.updateStatus(resolucao.getStatus(), id);
			return new ResponseEntity<Resolucao>(HttpStatus.OK);
	}
	
	/*private String mudarStatus(String status) {
		if(status.equals("Pendente") || status.equals("Em andamento") || status.equals("Finalizado")) {
			return status;
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}*/
	
	
	
}
