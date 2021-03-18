package taking.api.dto;

import taking.api.model.Usuarios;

public class UsuariosDTO {

	private Long id;
	private String email;
	
	public UsuariosDTO(Usuarios usuarios) {
		this.id = usuarios.getId();
		this.email = usuarios.getEmail();
	}

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
}
