/*package taking.api.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import taking.api.handler.RestExceptionHandler;
import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;

@Service
public class UsuariosAdmService {
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	private final UsuariosAdmRepository usuariosAdmRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UsuariosAdmService(UsuariosAdmRepository usuariosAdmRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuariosAdmRepository = usuariosAdmRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	public UsuariosAdm salvar(UsuariosAdm usuario) {		
		usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
		setUsuario(usuario);
		
        return usuariosAdmRepository.save(usuario);
    }
	
	private boolean setUsuario(UsuariosAdm usuario) {
		
		Usuarios user = new Usuarios();
		user.setEmail(usuario.getEmail());
		user.setSenha(usuario.getSenha());
		user.setCargo("ADM");
		user.setCep(".");
		user.setEndereco(".");
		user.setNome(usuario.getNome());
		user.setRg(".");
		user.setCpf(randomCpf());
		
		try {
			usuariosRepository.save(user);
			return true;
		}catch (DataAccessException ex) {
			ex.getCause().getMessage();
		}
		
		return false;
	}
	
	private String randomCpf() {
		String randomNumber = Integer.toString((int) (Math.random() * ((100000 - 100))));
		return randomNumber;
	}
	
	/*public List<UsuariosAdm>findById(Long id) throws Exception {
		Optional<UsuariosAdm> adm = usuariosAdmRepository.findById(id);
		if(adm == null) {
			throw new Exception();
		}
		return adm;
		
	}
	
}*/