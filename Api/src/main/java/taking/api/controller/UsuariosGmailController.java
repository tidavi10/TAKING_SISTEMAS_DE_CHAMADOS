package taking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import taking.api.dto.TokenDTO;
import taking.api.model.JwtRequest;
import taking.api.model.Usuarios;

import taking.api.repository.UsuariosRepository;
import taking.api.service.AuthenticateService;
import taking.api.service.UsuariosService;

@Api(tags="Usuarios")
@RestController
@RequestMapping("/loginsocial")
public class UsuariosGmailController {

	private JwtAuthenticationController loginController;
	
	@Autowired
	private UsuariosService usuariosService;
	
	@PostMapping("/cadastrogmail")
	@ApiOperation(value = "Cadastra um Usuário do Gmail")
	public ResponseEntity<TokenDTO> cadastroUsuario(@RequestBody Usuarios usuarios) {
		return usuariosService.salvarUsuarioGmailERetornarId(usuarios);

	}

}