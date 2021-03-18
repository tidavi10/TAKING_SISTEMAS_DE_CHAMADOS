package taking.api.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import io.swagger.annotations.ApiModelProperty;

@Entity
public class TipoProblema implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes = "ID do usuário", required = true, position = 1)
	private Long id;
	
	@ApiModelProperty(notes = "Tipo do problema do usuário", required = true, position = 2)
	private String tipoDoProblema;
	
	@ApiModelProperty(notes = "Área do responsável do tipo do problema", required = true, position = 3)
	private String areaResponsavel;
	
	@OneToMany
	private List<Chamados> chamados = new ArrayList<>(); 
	
	public TipoProblema() {
	}

	public TipoProblema(String tipoDoProblema, String areaResponsavel) {
		super();
		this.tipoDoProblema = tipoDoProblema;
		this.areaResponsavel = areaResponsavel;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTipoDoProblema() {
		return tipoDoProblema;
	}

	public void setTipoDoProblema(String tipoDoProblema) {
		this.tipoDoProblema = tipoDoProblema;
	}

	public String getAreaResponsavel() {
		return areaResponsavel;
	}

	public void setAreaResponsavel(String areaResponsavel) {
		this.areaResponsavel = areaResponsavel;
	}
}
