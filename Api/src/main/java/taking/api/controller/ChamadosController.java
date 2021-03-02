package taking.api.controller;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.dto.ChamadosRespostaDTO;
import taking.api.model.Chamados;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;
import taking.api.service.ChamadosService;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {

	@Autowired
	private ChamadosService chamadosService;
	
	@Autowired
	private ChamadosRepository chamadosRepository;
	
	@Autowired
	private UsuariosRepository usuarioRepository;
	
	@Autowired
	private UsuariosAdmRepository admRepository;

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping(value = "/{chamadoId}")
	public ResponseEntity<Chamados> findById(@PathVariable Long chamadoId) {
		Chamados obj = chamadosService.findById(chamadoId);
		return ResponseEntity.ok().body(obj);
	}

	
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping
	public ResponseEntity<List<ChamadosRespostaDTO>> listaDeChamados() {
		List<Chamados> lista =  chamadosService.lista();
		List<ChamadosRespostaDTO> listaDto = lista.stream().map(obj -> new ChamadosRespostaDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listaDto);
	}
	
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@PostMapping("/{userId}/{problemId}/{admId}")
	public ResponseEntity<Chamados> cadastrarChamado(@PathVariable("userId") Long userId,
			@PathVariable("admId") Long admId, @PathVariable("problemId") Long problemId, @RequestParam("file") MultipartFile file,
			@RequestParam("descricaoProblema") String descricaoProblema) {
		
		Chamados obj = null;
		if(usuarioRepository.existsById(userId) && admRepository.existsById(admId)) {
			obj = chamadosService.salvarDados(userId, problemId, admId, file, descricaoProblema, new Date());
		}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{chamadoId}").buildAndExpand(obj.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping("/baixarAnexo/{chamadoId}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Long chamadoId) {
		Chamados chamado = chamadosService.getFile(chamadoId).get();
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(chamado.getTipoAnexo()))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment:filename=\"" + chamado.getNomeAnexo() + "\"")
				.body(new ByteArrayResource(chamado.getAnexo()));
	}

	//Retorna todos os chamados paginados
	@GetMapping("/pagina/{numeroPagina}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public List<Chamados> retornoPaginado(@PathVariable int numeroPagina) {
		return chamadosService.findChamadosPaginated(numeroPagina);
	}
	
	//Retorna os chamados de um usuário específico
	@GetMapping("usuario/{idUsuario}/{numeroPagina}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public List<Chamados> chamadosUsuario(@PathVariable Long idUsuario, @PathVariable int numeroPagina) {
		return chamadosService.findChamadosUsuarioPaginated(numeroPagina, idUsuario);
	}

	//Retorna um chamado específico para o ADM
	@GetMapping("/{idChamado}/{idAdm}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public List<Chamados> chamadosIdAndAdm(@PathVariable Long idChamado, @PathVariable Long idAdm){
		return chamadosService.findByIdAndAdm(idChamado, idAdm);
	}

	//Retorna todos o chamados para um ADM específico
	@GetMapping("/adm/{idAdm}/{numeroPagina}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public List<Chamados> chamadosAdm(@PathVariable Long idAdm, @PathVariable int numeroPagina){
		return chamadosService.findChamadosAdmPaginated(numeroPagina, idAdm);
	}
}
