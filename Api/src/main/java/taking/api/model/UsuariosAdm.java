package taking.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "usuariosadm")
public class UsuariosAdm implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idAdm")
	private Long ID;
	
	private String username; //será excluido posteriormente
	
	@Column(unique = true)
	private String email;
	
	private String senha;

	public Long getID() {
		return ID;
	}
	
	public UsuariosAdm(String username, String email, String senha) {
		this.username = username;
		this.email = email;
		this.senha = senha;
	}
	
	public UsuariosAdm() {
		
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}
	
	public void JwtRequest()
	{
	}

	public void JwtRequest(String username, String senha) {
		this.setUsername(username);
		this.setSenha(senha);
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
