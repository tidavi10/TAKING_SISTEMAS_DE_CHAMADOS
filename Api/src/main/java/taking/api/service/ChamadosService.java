package taking.api.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import taking.api.model.Chamados;
import taking.api.model.TipoProblema;
import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.TipoProblemaRepository;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;

@Service
public class ChamadosService {

	@Autowired
	private ChamadosRepository chamadosRepository;

	@Autowired
	private TipoProblemaRepository problemaRepository;

	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@Autowired
	private UsuariosAdmRepository usuariosAdmRepository;
	
//	public Boolean UserExistsById(Long useId) {
//		if(usuariosRepository.findById(useId)) {
//			
//		}
//	}

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

	public Chamados salvarDados(Long userId, Long problemId, Long admId, MultipartFile file, String descricaoProblema,
			Date dataCriacao) {
		Chamados obj = null;
		try {
	
			String nomeAnexo = file.getOriginalFilename();
			Optional<Usuarios> usuario = usuariosRepository.findById(userId);
			Optional<TipoProblema> problema = problemaRepository.findById(problemId);
			Optional<UsuariosAdm> adm = usuariosAdmRepository.findById(admId);
			
			Chamados chamados = new Chamados(descricaoProblema, file.getBytes(), nomeAnexo, file.getContentType(),
					"Pendente", dataCriacao, problema.get(), usuario.get(), adm.get());
	
			obj = chamadosRepository.save(chamados);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		return obj;
	}

	public List<Chamados> findChamadosPaginated(int pageNo) {

		Pageable paginacao = PageRequest.of(pageNo, 4);
		Page<Chamados> resultado = chamadosRepository.findAll(paginacao);

		return resultado.toList();
	}
	
	public List<Chamados> findChamadosUsuarioPaginated(int pageNo, Long id){
		List<Chamados> chamadosPaginados = new ArrayList<Chamados>();
		Pageable paginacao = PageRequest.of(pageNo, 4);
		
		Page<Chamados> chamadosUsuario = chamadosRepository.findByUsuario(usuariosRepository.findById(id), paginacao);
		
		chamadosPaginados = chamadosUsuario.getContent();
		
		return chamadosPaginados;	
	}
	
	public List<Chamados> findChamadosAdmPaginated(int pageNo, Long adm){
		List<Chamados> chamadosPaginados = new ArrayList<Chamados>();
		Pageable paginacao = PageRequest.of(pageNo, 4);
		
		Page<Chamados> chamadosAdm = chamadosRepository.findByAdm(usuariosAdmRepository.findById(adm), paginacao);
		
		chamadosPaginados = chamadosAdm.getContent();
		
		return chamadosPaginados;	
	}
	
	public List<Chamados> findByIdAndAdm(Long id, Long adm){
		return chamadosRepository.findByIdAndAdm(id, usuariosAdmRepository.findById(adm));
	}
	
	public boolean existsByIdAndAdm(Long id, Long adm) {
		return chamadosRepository.existsByIdAndAdm(id, usuariosAdmRepository.findById(adm));
	}
}
