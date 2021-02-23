package taking.api.controller;

import java.net.URI;
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

import taking.api.model.Chamados;
import taking.api.service.ChamadosService;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {

	@Autowired
	private ChamadosService chamadosService;
	
	@GetMapping(value = "/{chamadoId}")
	public ResponseEntity<Chamados> findById(@PathVariable Long chamadoId) {
		Chamados obj = chamadosService.findById(chamadoId);
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping("/{userId}/{problemId}")
	public ResponseEntity<Chamados> cadastrarChamado(@PathVariable("userId") Long userId, @PathVariable("problemId") Long problemId,
			@RequestParam("file") MultipartFile file, @RequestParam("descricaoProblema") String descricaoProblema,
			@RequestParam("dataCriacao") String dataCriacao) {
		
		Chamados obj = chamadosService.salvarDados(userId, problemId, file, descricaoProblema, dataCriacao);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{chamadoId}")
				.buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping
	public ResponseEntity<List<Chamados>> ListaDeChamados() {
		List<Chamados> list = chamadosService.lista();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/baixarAnexo/{chamadoId}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Long chamadoId){
		Chamados chamado = chamadosService.getFile(chamadoId).get();
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(chamado.getTipoAnexo()))
				.header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=\""+chamado.getNomeAnexo()+"\"")
				.body(new ByteArrayResource(chamado.getAnexo()));
	}
}
