package taking.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import taking.api.dto.TokenDTO;
import taking.api.model.Usuarios;
import taking.api.repository.UsuariosRepository;

@Service
public class UsuariosService {

	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@Autowired
	private AuthenticateService authenticateService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	public ResponseEntity<TokenDTO> salvarUsuarioERetornarToken(Usuarios usuarios){
		String senha = usuarios.getSenha();
		usuarios.setSenha(bCryptPasswordEncoder.encode(usuarios.getSenha()));
		usuarios.setIsAdm(false);
		usuariosRepository.saveAndFlush(usuarios);
		return authenticateService.UserAuth(usuarios.getEmail(), senha);
	}
	
	public ResponseEntity<TokenDTO> salvarUsuarioGmailERetornarId(Usuarios usuarios){
		String senha = usuarios.getSenha();
		//usuarios.setSenha(bCryptPasswordEncoder.encode(usuarios.getSenha()));
		usuarios.setIsAdm(false);
		usuariosRepository.saveAndFlush(usuarios);
		return authenticateService.UserAuth(usuarios.getEmail(), senha);
	}
	
	public ResponseEntity<TokenDTO> salvarAdmERetornarToken(Usuarios usuarios) {
		String senha = usuarios.getSenha();
		usuarios.setSenha(bCryptPasswordEncoder.encode(usuarios.getSenha()));
		usuarios.setIsAdm(true);
		usuariosRepository.saveAndFlush(usuarios);
		return authenticateService.UserAuth(usuarios.getEmail(), senha);
	}
	
}
