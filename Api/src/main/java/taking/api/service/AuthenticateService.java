package taking.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import taking.api.config.JwtTokenUtil;
import taking.api.dto.TokenDTO;
import taking.api.model.Usuarios;
//import taking.api.model.UsuariosAdm;
//import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;

@Service
public class AuthenticateService {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	/*@Autowired
	private AdmDetailsService admDetailsService;*/

	@Autowired
	private UsuariosRepository usuariosRepository;

	/*@Autowired
	private UsuariosAdmRepository usuariosAdmRepository;*/

	public ResponseEntity<TokenDTO> AdmAuth(String email, String senha) {
		
		if(usuariosRepository.existsByEmailAndIsAdm(email, true)) {
			
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					email, senha));
			
			final UserDetails userDetails = userDetailsService.loadUserByUsername(email);
			
			Usuarios usuario = usuariosRepository.findByEmail(email);
			
			final String token = jwtTokenUtil.generateToken(userDetails);
			TokenDTO tokenResponse = new TokenDTO();
			tokenResponse.setId(usuario.getId());
			tokenResponse.setNome(usuario.getNome());
			tokenResponse.setToken(token);
			
			return ResponseEntity.ok(tokenResponse);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}

	public ResponseEntity<TokenDTO> UserAuth(String email, String senha) {

		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				email, senha));
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(email);

		Usuarios usuario = usuariosRepository.findByEmail(email);

		final String token = jwtTokenUtil.generateToken(userDetails);
		TokenDTO tokenResponse = new TokenDTO();
		tokenResponse.setId(usuario.getId());
		tokenResponse.setNome(usuario.getNome());
		tokenResponse.setToken(token);

		return ResponseEntity.ok(tokenResponse);
	
	}
}
