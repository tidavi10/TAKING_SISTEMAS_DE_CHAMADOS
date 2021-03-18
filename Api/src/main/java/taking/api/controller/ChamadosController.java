package taking.api.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.dto.ChamadoIdDTO;
import taking.api.dto.ChamadosRespostaDTO;
import taking.api.model.Chamados;
import taking.api.repository.UsuariosRepository;
import taking.api.service.ChamadosService;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {

	@Autowired
	private ChamadosService chamadosService;
	
	@Autowired
	private UsuariosRepository usuarioRepository;
	
	/*@Autowired
	private UsuariosAdmRepository admRepository;*/

	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping(value = "/{chamadoId}")
	public ResponseEntity<Chamados> findById(@PathVariable Long chamadoId) {
		Chamados obj = chamadosService.findById(chamadoId);
		return ResponseEntity.ok().body(obj);
	}

	
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping("/chamadosDoUsuario/{userId}")
	public ResponseEntity<List<ChamadosRespostaDTO>> listaDeChamados(@PathVariable("userId") Long userId) {
		List<Chamados> lista =  chamadosService.lista(userId);
		List<ChamadosRespostaDTO> listaDto = lista.stream().map(obj -> new ChamadosRespostaDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listaDto);
	}
	
	@ApiOperation(value = "Cadastra um novo chamado", 
			notes = "Para cadastrar um novo chamado será necessário passar na URL o ID do Usuário, o ID do problema"
					+ "e o ID do ADM",
			authorizations = { @Authorization(value = "jwtToken") })
	@PostMapping("/{userId}/{problemId}")
	public ResponseEntity<ChamadoIdDTO> cadastrarChamado(@PathVariable("userId") Long userId,
			//@PathVariable("admId") Long admId,
			@PathVariable("problemId") Long problemId, 
			@RequestParam("file") MultipartFile file,
			@RequestParam("descricaoProblema") String descricaoProblema) throws IOException {
		
		Chamados obj = chamadosService.salvarDados(userId, problemId, file, descricaoProblema, new Date());
		ChamadoIdDTO chamadoIdDto = new ChamadoIdDTO(obj.getId());
		return ResponseEntity.ok(chamadoIdDto);
	}

	@ApiOperation(value = "Faz o download do anexo", 
			notes = "Para fazer o download no anexo, passar na URL o ID do chamado do anexo",
			authorizations = { @Authorization(value = "jwtToken") })
	@GetMapping("/baixarAnexo/{chamadoId}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Long chamadoId) {
		Chamados chamado = chamadosService.getFile(chamadoId).get();
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(chamado.getTipoAnexo()))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment:filename=\"" + chamado.getNomeAnexo() + "\"")
				.body(new ByteArrayResource(chamado.getAnexo()));
	}

	//Retorna todos os chamados paginados
	/*@GetMapping("/pagina/{numeroPagina}")
	@ApiOperation(value = "Retorna todos os chamados paginados", authorizations = { @Authorization(value = "jwtToken") })
	public List<Chamados> retornoPaginado(@PathVariable int numeroPagina) {
		return chamadosService.findChamadosPaginated(numeroPagina);
	}*/
	
	//Retorna os chamados de um usuário específico
	@GetMapping("usuario/{idUsuario}/{numeroPagina}")
	@ApiOperation(notes = "Retorna os chamados de um Usuário específico, passando como"
							+ "argumento na URL o ID do Usuário e o número da página respectivamente."
							+ "\nA primeira página começa passando como parametro 0.",
					value = "Retorna todos o chamados para um usuário específico",
					authorizations = { @Authorization(value = "jwtToken") })
	public List<ChamadosRespostaDTO> chamadosUsuario(@PathVariable Long idUsuario, @PathVariable int numeroPagina) {
		return chamadosService.findChamadosUsuarioPaginated(numeroPagina, idUsuario);
	}

	//Retorna um chamado específico para o ADM
	@GetMapping("/adm/{idChamado}")
	@ApiOperation(value = "Retorna um chamado específico para o ADM", 
					notes = "Retorna todas as informações de um chamado para um ADM específico",
					authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<ChamadosRespostaDTO> chamadosIdAndAdm(@PathVariable Long idChamado){
		return chamadosService.chamadoById(idChamado);
	}

	//Retorna todos o chamados para um ADM específico
	@GetMapping("/adm/all/{numeroPagina}")
	@ApiOperation(value = "Retorna todos o chamados para um ADM específico", 
					notes = "Retorna os chamados páginados de um ADM específico, passando como "
							+ "argumento na URL o ID do ADM e o número da página respectivamente."
							+ "\nA primeira página começa passando como parametro 0.",
					authorizations = { @Authorization(value = "jwtToken") })
	public List<ChamadosRespostaDTO> chamadosAdm(@PathVariable int numeroPagina) {
		return chamadosService.findChamadosAdmPaginated(numeroPagina);
	}
	
	@GetMapping("/totalPaginas/adm")
	@ApiOperation(value = "Retorna a quantidade de páginas", 
					notes = "Retorna a quantidade de páginas começando com 1, para mandar para o endpoint "
							+ "que retorna os chamados, diminuir 1 no número retornado.",
					authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<Long> paginasAdm() {
		return ResponseEntity.ok(chamadosService.paginasAdm());
	}
	
	@GetMapping("/totalPaginas/usuario/{idUsuario}")
	@ApiOperation(value = "Retorna a quantidade de páginas", 
					notes = "Retorna a quantidade de páginas começando com 1, para mandar para o endpoint "
							+ "que retorna os chamados, diminuir 1 no número retornado.",
					authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<Long> paginasUsuario(@PathVariable Long idUsuario) {
		return ResponseEntity.ok(chamadosService.paginasUsuairo(idUsuario));
	}
}
