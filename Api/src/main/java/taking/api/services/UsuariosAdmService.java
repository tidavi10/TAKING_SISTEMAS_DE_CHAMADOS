package taking.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;

@Service
public class UsuariosAdmService {
	
	private final UsuariosAdmRepository usuariosAdmRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UsuariosAdmService(UsuariosAdmRepository usuariosAdmRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuariosAdmRepository = usuariosAdmRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	public UsuariosAdm salvar(UsuariosAdm usuario) {
		usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
        return usuariosAdmRepository.save(usuario);
    }
	
}