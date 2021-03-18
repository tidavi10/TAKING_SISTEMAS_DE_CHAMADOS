package taking.api.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import taking.api.model.Chamados;
//import taking.api.model.UsuariosAdmChamados;

public class ChamadosRespostaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String descricao;
	private String status;
	
	@JsonInclude(Include.NON_NULL)
	private Long quantidadePaginas;
	
	public ChamadosRespostaDTO() {
	}

	public ChamadosRespostaDTO(Chamados chamado) {
		this.id = chamado.getId();
		this.descricao = chamado.getDescricao();
		this.status = chamado.getStatus();
	}
	
	public ChamadosRespostaDTO(Long quantidadePaginas) {
		this.quantidadePaginas = quantidadePaginas;
	}
	
	/*public ChamadosRespostaDTO(UsuariosAdmChamados chamado) {
		this.id = chamado.getChamados().getId();
		this.descricao = chamado.getChamados().getDescricao();
		this.status = chamado.getChamados().getStatus();
	}*/

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getQuantidadePaginas() {
		return quantidadePaginas;
	}

	public void setQuantidadePaginas(Long quantidadePaginas) {
		this.quantidadePaginas = quantidadePaginas;
	}
	
}
