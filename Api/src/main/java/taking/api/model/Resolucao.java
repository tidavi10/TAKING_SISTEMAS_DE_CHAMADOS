package taking.api.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModelProperty;

@Entity
public class Resolucao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes = "ID da resolução", position = 1)
	private Long id;

	@ManyToOne
	@PrimaryKeyJoinColumn(name = "id")
	private Chamados chamados;

	@NotBlank
	@ApiModelProperty(notes = "Descrição da resolução dos chamados", required = true, position = 2)
	private String resolucao;

	@Column(name = "dataResolucao", updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@ApiModelProperty(notes = "Horário em que foi enviado a resolução", position = 3)
	private Date timestamp;

	@ApiModelProperty(notes = "Tempo gasto para resolução", required = true, position = 4)
	@Column(name = "tempoGasto")
	private String tempoGasto;
	
	@ApiModelProperty(notes = "Status do chamado", required = true, position = 5)
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Chamados getChamados() {
		return chamados;
	}

	public void setChamados(Chamados chamados) {
		this.chamados = chamados;
	}

	public String getResolucao() {
		return resolucao;
	}

	@JsonProperty("descricao")
	public void setResolucao(String resolucao) {
		this.resolucao = resolucao;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getTempoGasto() {
		return tempoGasto;
	}

	public void setTempoGasto(String tempoGasto) {
		this.tempoGasto = tempoGasto;
	}
	
	public String getStatus() {
		return status;
	}
}
