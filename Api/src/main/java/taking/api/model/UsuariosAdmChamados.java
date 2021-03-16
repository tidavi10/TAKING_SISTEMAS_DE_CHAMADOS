package taking.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
public class UsuariosAdmChamados {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ID;
	
	@ManyToOne
	@PrimaryKeyJoinColumn(name = "id")
	private Chamados chamados;
	
	@ManyToOne
	@PrimaryKeyJoinColumn(name = "id")
	private Usuarios adms;
	
	public UsuariosAdmChamados() {
		
	}
	
	public UsuariosAdmChamados(Usuarios adms, Chamados chamado) {
		this.chamados = chamado;
		this.adms = adms;
	}

	public Chamados getChamados() {
		return chamados;
	}

	public void setChamados(Chamados chamados) {
		this.chamados = chamados;
	}
	
	public Usuarios getAdms() {
		return adms;
	}

	public void setAdms(Usuarios adms) {
		this.adms = adms;
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}
	
	
}
