package taking.api.services;

import taking.api.model.Usuarios;
import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;
import taking.api.repository.UsuariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import java.util.Collections;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {
	private UsuariosAdmRepository usuariosAdmRepository;
	private UsuariosRepository usuariosRepository;

	@Autowired
	public UserDetailsServiceImpl(UsuariosAdmRepository usuariosAdmRepository, UsuariosRepository usuariosRepository) {
		this.usuariosAdmRepository = usuariosAdmRepository;
		this.usuariosRepository = usuariosRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UsuariosAdm adm = usuariosAdmRepository.findByEmail(email);
		Usuarios usuarios = usuariosRepository.findByEmail(email);

		if (usuarios == null) {
			if (adm == null) {
				throw new UsernameNotFoundException(email);
			} else {
				return new org.springframework.security.core.userdetails.User(adm.getEmail(), adm.getSenha(),
						Collections.emptyList());
			}
		}
		return new org.springframework.security.core.userdetails.User(usuarios.getEmail(), usuarios.getSenha(),
				Collections.emptyList());
	}
}