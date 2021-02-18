package taking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.services.UsuariosAdmService;

@RequestMapping("/usuariosadm")
@RestController
public class UsuariosAdmController {

	private final UsuariosAdmService usuariosAdmService;

	@Autowired
	public UsuariosAdmController(UsuariosAdmService usuariosAdmService) {
		this.usuariosAdmService = usuariosAdmService;
	}
	
	@PostMapping("/cadastro")
	public ResponseEntity<UsuariosAdm> salvar(@RequestBody UsuariosAdm usuarios)
	{
		UsuariosAdm adm = usuariosAdmService.salvar(usuarios);
		return new ResponseEntity<>(adm, HttpStatus.CREATED);
	}

}
