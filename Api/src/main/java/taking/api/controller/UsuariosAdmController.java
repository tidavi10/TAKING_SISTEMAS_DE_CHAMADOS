/*package taking.api.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.service.UsuariosAdmService;

@Api(tags="UsuariosAdm")
@RequestMapping("/usuariosadm")
@RestController
public class UsuariosAdmController {

	private final UsuariosAdmService usuariosAdmService;

	@Autowired
	public UsuariosAdmController(UsuariosAdmService usuariosAdmService) {
		this.usuariosAdmService = usuariosAdmService;
	}
	
	@PostMapping("/cadastro")
	@ApiOperation(value = "Retorna uma lista com todos os tipos de problemas", hidden = true, authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<UsuariosAdm> salvar(@Valid @RequestBody UsuariosAdm usuarios)
	{
		UsuariosAdm adm = usuariosAdmService.salvar(usuarios);
		return new ResponseEntity<>(adm, HttpStatus.CREATED);
	}
	
	/*@RequestMapping(method=RequestMethod.GET, value="/{idUser}")
	public List<Usuarios> usuarioTest(@PathVariable long idUser){
		
	}

}*/

package taking.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.dto.TokenDTO;
import taking.api.model.Usuarios;
import taking.api.service.UsuariosService;

@Api(tags="UsuariosAdm")
@RequestMapping("/usuariosadm")
@RestController
public class UsuariosAdmController {
	
	@Autowired
	private UsuariosService usuariosService;
	
	@PostMapping("/cadastro")
	@ApiOperation(value = "Cadastra um ADM", hidden = true, authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<TokenDTO> cadastroAdm(@Valid @RequestBody Usuarios usuarios){
		return usuariosService.salvarAdmERetornarToken(usuarios);
	}
}
