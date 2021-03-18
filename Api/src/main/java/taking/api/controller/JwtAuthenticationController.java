package taking.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.config.JwtTokenUtil;
import taking.api.dto.TokenDTO;
import taking.api.exceptions.AutenticacaoException;
import taking.api.model.JwtRequest;
import taking.api.model.Usuarios;
//import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;
import taking.api.service.AuthenticateService;
import taking.api.service.JwtUserDetailsService;

@Api(tags = "Autenticação")
@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired (required = false)
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private AuthenticateService authenticateService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@Autowired
	private UsuariosRepository usuariosRepository;

	/*@Autowired
	private UsuariosAdmRepository usuariosAdmRepository;*/

	@ApiOperation(value = "Login Usuário")
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		return authenticateService.UserAuth(authenticationRequest.getEmail(), authenticationRequest.getSenha());
	}

	@ApiOperation(value = "Login ADM")
	@RequestMapping(value = "/admAuth", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO> createAdmToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		return authenticateService.AdmAuth(authenticationRequest.getEmail(), authenticationRequest.getSenha());
	}
	
}