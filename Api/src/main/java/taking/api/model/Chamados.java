package taking.api.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Chamados implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricao;
	@Lob
	private byte[] anexo;
	private String nomeAnexo;
	private String tipoAnexo;
	private String status;
	
	@Column(name = "dataChamado", updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataCriacao;
	
	@ManyToOne
	private TipoProblema problema;
	@ManyToOne
	private Usuarios usuario;
	@ManyToOne
	private UsuariosAdm adm;
	
	public Chamados() {
	}
	
	public Chamados(String descricao, byte[] anexo, String nomeAnexo, String tipoAnexo, String status,
			Date dataCriacao, TipoProblema problema, Usuarios usuario) {
		super();
		this.descricao = descricao;
		this.anexo = anexo;
		this.nomeAnexo = nomeAnexo;
		this.tipoAnexo = tipoAnexo;
		this.status = status;
		this.dataCriacao = dataCriacao;
		this.problema = problema;
		this.usuario = usuario;
	}

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

	public byte[] getAnexo() {
		return anexo;
	}

	public void setAnexo(byte[] anexo) {
		this.anexo = anexo;
	}

	public String getNomeAnexo() {
		return nomeAnexo;
	}

	public void setNomeAnexo(String nomeAnexo) {
		this.nomeAnexo = nomeAnexo;
	}

	public String getTipoAnexo() {
		return tipoAnexo;
	}

	public void setTipoAnexo(String tipoAnexo) {
		this.tipoAnexo = tipoAnexo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public TipoProblema getProblema() {
		return problema;
	}

	public void setProblema(TipoProblema problema) {
		this.problema = problema;
	}

	public Usuarios getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuarios usuario) {
		this.usuario = usuario;
	}

	public UsuariosAdm getAdm() {
		return adm;
	}

	public void setAdm(UsuariosAdm adm) {
		this.adm = adm;
	}
}
