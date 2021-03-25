package taking.api.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames = "email")})
public class Usuarios implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@ApiModelProperty(notes = "ID do usuário", position = 1)
	private Long id;
	
	@JsonIgnore
	@OneToMany
	private List<Chamados> chamados = new ArrayList<>();

	@NotBlank (message = "E-mail inválido")

	@ApiModelProperty(notes = "E-mail do usuário", required = true, position = 3)
	@Email
	private String email;
	
	@NotBlank (message = "Senha inválido")
	@ApiModelProperty(notes = "Senha do usuário", required = true, position = 4)
	private String senha;
	
	@NotBlank (message = "Nome inválido")
	@ApiModelProperty(notes = "Nome do usuário", required = true, position = 2)
	private String nome;
	
	@NotBlank (message = "Endereço inválido")
	@ApiModelProperty(notes = "Endereço do usuário", required = true, position = 8)
	private String endereco;
	
	@NotBlank (message = "CEP inválido")
	@ApiModelProperty(notes = "CEP do usuário", required = true, position = 7)
	@Pattern(regexp = "^1?(\\d{8})")
	private String cep;

	@NotBlank (message = "Cargo inválido")
	@ApiModelProperty(notes = "Cargo do usuário", required = true, position = 9)
	@Pattern(regexp = "^[a-zA-Z ]+$")
	private String cargo;
	
	@NotBlank (message = "CPF inválido")
	@ApiModelProperty(notes = "CPF do usuário", required = true, position = 5)
	@Pattern(regexp = "^1?(\\d{11})")
	private String cpf;
	
	@NotBlank (message = "RG inválido")
	@ApiModelProperty(notes = "RG do usuário", required = true, position = 6)
	@Pattern(regexp = "^1?(\\d{9})")
	private String rg;
	
	@ApiModelProperty(notes = "verifica se é Adm", hidden= true)
	private boolean isAdm;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}
	
	public boolean getIsAdm() {
		return isAdm;
	}
	
	public void setIsAdm(boolean isAdm) {
		this.isAdm = isAdm;
	}
	
	public void JwtRequest()
	{
	}

	public void JwtRequest(String email, String senha) {
		this.setEmail(email);
		this.setSenha(senha);
	}
	
}