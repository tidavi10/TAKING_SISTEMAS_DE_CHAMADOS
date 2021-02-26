package taking.api.controller;

import java.net.URI;
import java.util.Date;
import java.util.List;

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
import taking.api.model.Chamados;
import taking.api.repository.ChamadosRepository;
import taking.api.service.ChamadosService;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {

	@Autowired
	private ChamadosService chamadosService;
	
	@Autowired
	private ChamadosRepository chamadosRepository;

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping(value = "/{chamadoId}")
	public ResponseEntity<Chamados> findById(@PathVariable Long chamadoId) {
		Chamados obj = chamadosService.findById(chamadoId);
		return ResponseEntity.ok().body(obj);
	}

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@PostMapping("/{userId}/{problemId}")
	public ResponseEntity<Chamados> cadastrarChamado(@PathVariable("userId") Long userId,
			@PathVariable("problemId") Long problemId, @RequestParam("file") MultipartFile file,
			@RequestParam("descricaoProblema") String descricaoProblema) {
		
		if(chamadosRepository.existsById(userId)) {
			Chamados obj = chamadosService.salvarDados(userId, problemId, file, descricaoProblema, new Date());
	
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{chamadoId}").buildAndExpand(obj.getId())
					.toUri();
			return ResponseEntity.created(uri).build();
		}
		return null;
	}

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping
	public ResponseEntity<List<Chamados>> ListaDeChamados() {
		List<Chamados> list = chamadosService.lista();
		return ResponseEntity.ok().body(list);
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
