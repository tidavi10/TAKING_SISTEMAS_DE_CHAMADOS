package taking.api.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.InvalidMimeTypeException;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import taking.api.dto.ChamadosRespostaDTO;
import taking.api.dto.ResolucaoDTO;
import taking.api.model.Chamados;
import taking.api.model.Resolucao;
import taking.api.model.TipoProblema;
import taking.api.model.Usuarios;
//import taking.api.model.UsuariosAdm;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.ResolucaoRepository;
import taking.api.repository.TipoProblemaRepository;
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
	private ResolucaoRepository resolucaoRepository;

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
			Date dataCriacao) throws IOException {

		if (usuariosRepository.existsById(userId)) {
			
			Optional<Usuarios> usuario = usuariosRepository.findById(userId);
			Optional<TipoProblema> problema = problemaRepository.findById(problemId);
			
			String nomeAnexo = "";
			Chamados chamados = null;
			
			if(file != null) {
				nomeAnexo = file.getOriginalFilename();
				chamados = new Chamados(descricaoProblema, file.getBytes(), nomeAnexo, file.getContentType(),
						"Pendente", dataCriacao, problema.get(), usuario.get());
			}
			
			chamados = new Chamados(descricaoProblema, "Pendente", dataCriacao, problema.get(), usuario.get());
			Chamados obj = chamadosRepository.save(chamados);
			return obj;
		}
		throw new IOException("Failed to access the file: " + file);
	}

	public List<Chamados> findChamadosPaginated(int pageNo) {

		Pageable paginacao = PageRequest.of(pageNo, 5);
		Page<Chamados> resultado = chamadosRepository.findAll(paginacao);

		return resultado.toList();
	}

	public List<ChamadosRespostaDTO> findChamadosUsuarioPaginated(int pageNo, Long id) {
		List<ChamadosRespostaDTO> chamadosPaginados = new ArrayList<ChamadosRespostaDTO>();
		Pageable paginacao = PageRequest.of(pageNo, 5);

		Page<ChamadosRespostaDTO> chamadosUsuario = chamadosRepository.findByUsuario(usuariosRepository.findById(id),
				paginacao);

		chamadosPaginados = chamadosUsuario.getContent();

		return chamadosPaginados;
	}

	public List<ChamadosRespostaDTO> findChamadosAdmPaginated(int pageNo) {
		List<ChamadosRespostaDTO> chamadosPaginados = new ArrayList<ChamadosRespostaDTO>();
		Pageable paginacao = PageRequest.of(pageNo, 5);

		Page<Chamados> chamados = chamadosRepository.findAll(paginacao);
		Page<ChamadosRespostaDTO> chamadosAdm = chamados.map(new Function<Chamados, ChamadosRespostaDTO>() {
			@Override
			public ChamadosRespostaDTO apply(Chamados chamados) {
				ChamadosRespostaDTO dto = new ChamadosRespostaDTO();
				dto.setDescricao(chamados.getDescricao());
				dto.setId(chamados.getId());
				dto.setStatus(chamados.getStatus());
				dto.setTipoProblema(chamados.getProblema().getTipoDoProblema());
				return dto;
			}
		});
		chamadosPaginados = chamadosAdm.getContent();

		return chamadosPaginados;
	}

	public long paginasAdm() {
		Pageable paginacao = PageRequest.of(0, 5);

		Page<Chamados> chamados = chamadosRepository.findAll(paginacao);
		
		return chamados.getTotalPages();
	}
	
	public long paginasUsuairo(Long id) {
		Pageable paginacao = PageRequest.of(0, 5);

		Page<ChamadosRespostaDTO> chamados = chamadosRepository.findByUsuario(usuariosRepository.findById(id),
				paginacao);
		
		return chamados.getTotalPages();
	}

	public ResponseEntity<ChamadosRespostaDTO> chamadoById(Long id) {

		Optional<Chamados> chamado = chamadosRepository.findById(id);
		
		if(chamado.isPresent()) {
			ChamadosRespostaDTO dto = new ChamadosRespostaDTO(chamado.get(), getTempoGasto(id));
			return ResponseEntity.ok(dto);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}

	public boolean existsByIdAndAdm(Long id, Long adm) {
		return chamadosRepository.existsByIdAndUsuario(id, usuariosRepository.findById(adm));
	}

	private Usuarios getAdm() {
		List<Usuarios> adms = usuariosRepository.findByIsAdm(true);

		return adms.get(new Random().nextInt(adms.size()));
	}

	/*private void insertAdmChamado(Usuarios adm, Chamados chamado) {
		UsuariosAdmChamados adms = new UsuariosAdmChamados(adm, chamado);

		usuariosAdmChamadosRepository.save(adms);
	}*/
	
	private String getTempoGasto(Long id) {
		List<Resolucao> resolucao = resolucaoRepository.findByChamadosId(id);
		if(resolucao.size() <= 0 ) {
			return null;
		}
		String tempoGasto = resolucao.get(resolucao.size() - 1).getTempoGasto();
		return tempoGasto;
	}
}