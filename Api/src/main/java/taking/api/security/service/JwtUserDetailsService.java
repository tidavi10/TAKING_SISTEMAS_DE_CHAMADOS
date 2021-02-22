package taking.api.security.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import taking.api.model.Usuarios;
import taking.api.repository.UsuariosRepository;


@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	
	@Autowired
	private UsuariosRepository usuariosRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuarios user = usuariosRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getSenha(),
				new ArrayList<>());
	}
	
	public Usuarios save(Usuarios user) {
		Usuarios newUser = new Usuarios();
		newUser.setUsername(user.getUsername());
		newUser.setSenha(bcryptEncoder.encode(user.getSenha()));
		return usuariosRepository.save(newUser);
	}
	
	//public Usuarios getSenhaDecoded(Usuarios user) {
	//	String password = user.getSenha();
	//	password = bcryptEncoder.
	//}
}