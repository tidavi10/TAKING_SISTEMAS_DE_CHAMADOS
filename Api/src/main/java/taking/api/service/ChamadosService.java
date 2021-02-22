package taking.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import taking.api.model.Chamados;
import taking.api.repository.ChamadosRepository;

@Service
public class ChamadosService {

	@Autowired
	private ChamadosRepository chamadosRepository;
	
	public Optional<Chamados> getFile(Long fileId) {
		return chamadosRepository.findById(fileId);
	}
	
	public List<Chamados> lista() {
		return chamadosRepository.findAll();
	}
}
