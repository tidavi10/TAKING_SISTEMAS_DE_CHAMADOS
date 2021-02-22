package taking.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import taking.api.model.Chamados;
import taking.api.model.TipoProblema;
import taking.api.model.Usuarios;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.TipoProblemaRepository;
import taking.api.repository.UsuariosRepository;
import taking.api.service.ChamadosService;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {

	@Autowired
	private ChamadosRepository chamadosRepository;
	
	@Autowired
	private ChamadosService chamadosService;
	
	@Autowired
	private TipoProblemaRepository problemaRepository;
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@PostMapping("/{userId}/{problemId}")
	public void cadastrarChamado(@PathVariable("userId") Long userId, @PathVariable("problemId") Long problemId,
			@RequestParam("file") MultipartFile file, @RequestParam("descricaoProblema") String descricaoProblema,
			@RequestParam("dataCriacao") String dataCriacao) {
		
		String nomeAnexo = file.getOriginalFilename();
		try {
			Optional<Usuarios> usuario = usuariosRepository.findById(userId);
			Optional<TipoProblema> problema = problemaRepository.findById(problemId);
			
			Chamados chamados = new Chamados();
			
			chamados.setAnexo(file.getBytes());
			chamados.setNomeAnexo(nomeAnexo);
			chamados.setTipoAnexo(file.getContentType());
			chamados.setDescricao(descricaoProblema);
			chamados.setDataCriacao(dataCriacao);
			chamados.setUsuario(usuario.get());
			chamados.setProblema(problema.get());
			chamados.setStatus("Pendente");
			
			chamadosRepository.save(chamados);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping
	public ResponseEntity<List<Chamados>> ListaDeChamados() {
		List<Chamados> list = chamadosService.lista();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/baixarAnexo/{userId}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Long userId){
		Chamados chamado = chamadosService.getFile(userId).get();
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(chamado.getTipoAnexo()))
				.header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=\""+chamado.getNomeAnexo()+"\"")
				.body(new ByteArrayResource(chamado.getAnexo()));
	}
}
