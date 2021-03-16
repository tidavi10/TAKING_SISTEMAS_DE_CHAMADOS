/*package taking.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "usuariosadm")
public class UsuariosAdm implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes = "ID do usuário", position = 1)
	@Column(name = "idAdm")
	private Long ID;
	
	@NotBlank (message = "Nome inválido")
	@ApiModelProperty(notes = "Nome do usuário", required = true, position = 2)
	private String nome;
	
	
	@NotBlank (message = "E-mail inválido")
	@ApiModelProperty(notes = "E-mail do usuário", required = true, position = 3)
	@Column(unique = true)
	private String email;
	
	@NotBlank (message = "Senha inválida")
	@ApiModelProperty(notes = "Senha do usuário", required = true, position = 4)
	private String senha;

	public Long getID() {
		return ID;
	}
	
	public UsuariosAdm(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
	public UsuariosAdm() {
		
	}
	
	public String getNome() {
		return nome;
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

	public void JwtRequest(String email, String senha) {
		this.setEmail(email);
		this.setSenha(senha);
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}

}
*/