package taking.api.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import taking.api.dto.ChamadosRespostaDTO;
import taking.api.model.Chamados;
import taking.api.model.TipoProblema;
import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdmChamados;
//import taking.api.model.UsuariosAdm;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.TipoProblemaRepository;
import taking.api.repository.UsuariosAdmChamadosRepository;
//import taking.api.repository.UsuariosAdmRepository;
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
	private UsuariosAdmChamadosRepository usuariosAdmChamadosRepository;
	
	/*@Autowired
	private UsuariosAdmRepository usuariosAdmRepository;*/

	public Chamados findById(Long chamadoId) {
		Optional<Chamados> obj = chamadosRepository.findById(chamadoId);
		return obj.get();
	}

	public Optional<Chamados> getFile(Long fileId) {
		return chamadosRepository.findById(fileId);
	}

	public List<Chamados> lista(Long id) {
		return chamadosRepository.listaTodos(id);
	}

	public Chamados salvarDados(Long userId, Long problemId, MultipartFile file, String descricaoProblema,
			Date dataCriacao) throws IOException  {

			if(usuariosRepository.existsById(userId)/* && usuariosAdmRepository.existsById(admId)*/) {
				String nomeAnexo = file.getOriginalFilename();
				Optional<Usuarios> usuario = usuariosRepository.findById(userId);
				Optional<TipoProblema> problema = problemaRepository.findById(problemId);
				//Optional<UsuariosAdm> adm = usuariosAdmRepository.findById(admId);
				
				Chamados chamados = new Chamados(descricaoProblema, file.getBytes(), nomeAnexo, file.getContentType(),
						"Pendente", dataCriacao, problema.get(), usuario.get()/*, adm.get()*/);
		
				Chamados obj = chamadosRepository.save(chamados);
				insertAdmChamado(getAdm(), chamados);
				return obj;
			}
			throw new IOException("Failed to acess the file: " + file);
	}

	public List<Chamados> findChamadosPaginated(int pageNo) {

		Pageable paginacao = PageRequest.of(pageNo, 4);
		Page<Chamados> resultado = chamadosRepository.findAll(paginacao);

		return resultado.toList();
	}
	
	public List<ChamadosRespostaDTO> findChamadosUsuarioPaginated(int pageNo, Long id){
		List<ChamadosRespostaDTO> chamadosPaginados = new ArrayList<ChamadosRespostaDTO>();
		Pageable paginacao = PageRequest.of(pageNo, 4);
		
		Page<ChamadosRespostaDTO> chamadosUsuario = chamadosRepository.findByUsuario(usuariosRepository.findById(id), paginacao);
		
		chamadosPaginados = chamadosUsuario.getContent();
		
		return chamadosPaginados;
	}
	
	public List<ChamadosRespostaDTO> findChamadosAdmPaginated(int pageNo, Long adm){
		List<ChamadosRespostaDTO> chamadosPaginados = new ArrayList<ChamadosRespostaDTO>();
		Pageable paginacao = PageRequest.of(pageNo, 4);
		
		Page<ChamadosRespostaDTO> chamadosAdm = usuariosAdmChamadosRepository.findByAdmsId(adm, paginacao);
		
		chamadosPaginados = chamadosAdm.getContent();
		
		return chamadosPaginados;
	}
	
	public List<ChamadosRespostaDTO> findByIdAndAdm(Long id, Long adm){
		
		List<ChamadosRespostaDTO> chamado = usuariosAdmChamadosRepository.findByAdmsIdAndChamadosId(adm, id);
		
		return chamado;
	}
	
	public boolean existsByIdAndAdm(Long id, Long adm) {
		return chamadosRepository.existsByIdAndUsuario(id, usuariosRepository.findById(adm));
	}
	
	private Usuarios getAdm(){
		List<Usuarios> adms = usuariosRepository.findByIsAdm(true);
		
		return adms.get(new Random().nextInt(adms.size()));
	}
	
	private void insertAdmChamado(Usuarios adm, Chamados chamado) {
		UsuariosAdmChamados adms = new UsuariosAdmChamados(adm, chamado);
		
		usuariosAdmChamadosRepository.save(adms);
	}
}
