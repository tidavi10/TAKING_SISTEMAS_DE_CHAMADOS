package taking.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.model.TipoProblema;
import taking.api.repository.TipoProblemaRepository;

@RestController
@RequestMapping(value = "/problema")
public class TipoProblemaController {

	@Autowired
	private TipoProblemaRepository repository;
	
	@GetMapping
	@ApiOperation(value = "Retorna uma lista com todos os tipos de problemas", authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<List<TipoProblema>> listaDeProblemas() {
		List<TipoProblema> list = repository.findAll();
		return ResponseEntity.ok().body(list);
	}
}