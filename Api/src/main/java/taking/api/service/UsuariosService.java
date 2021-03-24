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
	
	public ResponseEntity<TokenDTO> salvarUsuarioGmailERetornarId(Usuarios usuarios) {
		String senha = usuarios.getSenha();

		Usuarios usuarioExistente = usuariosRepository.findByEmail(usuarios.getEmail());
		if(usuarioExistente != null) {
			usuarios = usuarioExistente;
		}

		usuarios.setIsAdm(false);
		usuarios.setSenha("Google@123");
		usuarios.setRg("000000000");
		usuarios.setCep("00000000");
		usuarios.setCpf("01001010101");
		usuarios.setEndereco("Google");
		usuarios.setCargo("Google");
		usuariosRepository.saveAndFlush(usuarios);
		return authenticateService.UserGmailAuth(usuarios.getEmail(), senha);
	}
	
	
	public ResponseEntity<TokenDTO> salvarAdmERetornarToken(Usuarios usuarios) {
		String senha = usuarios.getSenha();
		usuarios.setSenha(bCryptPasswordEncoder.encode(usuarios.getSenha()));
		usuarios.setIsAdm(true);
		usuariosRepository.saveAndFlush(usuarios);
		return authenticateService.UserAuth(usuarios.getEmail(), senha);
	}
}
