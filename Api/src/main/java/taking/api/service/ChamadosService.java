package taking.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import taking.api.model.Chamados;
import taking.api.model.TipoProblema;
import taking.api.model.Usuarios;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.TipoProblemaRepository;
import taking.api.repository.UsuariosRepository;

@Service
public class ChamadosService {

	@Autowired
	private ChamadosRepository chamadosRepository;
	
	@Autowired
	private TipoProblemaRepository problemaRepository;
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	public Chamados findById(Long chamadoId) {
		Optional<Chamados> obj = chamadosRepository.findById(chamadoId);
		return obj.get();
	}
	
	public Optional<Chamados> getFile(Long fileId) {
		return chamadosRepository.findById(fileId);
	}
	
	public List<Chamados> lista() {
		return chamadosRepository.findAll();
	}
	
	
	
	public Chamados salvarDados(Long userId,  Long problemId, MultipartFile file, String descricaoProblema,  String dataCriacao) {
		Chamados obj = null;
		try {
			String nomeAnexo = file.getOriginalFilename();
			Optional<Usuarios> usuario = usuariosRepository.findById(userId);
			Optional<TipoProblema> problema = problemaRepository.findById(problemId);
			
			Chamados chamados = new Chamados(descricaoProblema, file.getBytes(), nomeAnexo, file.getContentType(), 
					"Pendente", dataCriacao, problema.get(), usuario.get());
			
			 obj = chamadosRepository.save(chamados);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return obj;
	}
}
