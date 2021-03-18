package taking.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jdk.internal.org.jline.utils.Log;
import taking.api.model.Usuarios;
import taking.api.repository.UsuariosRepository;


@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		if(usuariosRepository.existsByEmail(email)) {
			Usuarios user = usuariosRepository.findByEmail(email);
			
			String[] roles = user.getIsAdm() ? new String[] {"ADM"} : new String[] {"USER"};
			
			return User
					.builder()
					.username(user.getEmail())
					.password(user.getSenha())
					.roles(roles)
					.build();
		}
		throw new UsernameNotFoundException("User not found with username: " + email);
	}
	
	public Usuarios save(Usuarios user) {
		Usuarios newUser = new Usuarios();
		newUser.setEmail(user.getEmail());
		newUser.setSenha(bcryptEncoder.encode(user.getSenha()));
		return usuariosRepository.save(newUser);
	}
}