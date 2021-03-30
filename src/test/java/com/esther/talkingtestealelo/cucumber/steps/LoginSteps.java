package com.esther.talkingtestealelo.cucumber.steps;//projetochamadosfrontendtaking.herokuapp.com;

import com.esther.talkingtestealelo.cucumber.pageobjects.LoginPage;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class LoginSteps  extends ParentSteps {
	
	LoginPage paginaLogin;
	String email, senha;
	
	@Dado("^que usuário possa acessar a tela de login do sistema$")
	public void que_usuário_possa_acessar_a_tela_de_login_do_sistema() throws Throwable {
		webdriver.get("https://projetochamadosfrontendtaking.herokuapp.com");
		paginaLogin = new LoginPage(webdriver);
	}

	@Quando("^informar um \"([^\"]*)\" válido$")
	public void informar_um_válido(String usuario) throws Throwable {
	    this.email = usuario;
	}

	@Quando("^inserir uma \"([^\"]*)\" válida$")
	public void inserir_uma_válida(String senha) throws Throwable {
	    this.senha = senha;
	}

	@Então("^o sistema deve permitir a autenticação do usuário$")
	public void o_sistema_deve_permitir_a_autenticação_do_usuário() throws Throwable {
	    paginaLogin.efetuarLogin(this.email, this.senha);
	}
	
	public void redirecionado_para_a_tela_de_chamados() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


	@Quando("^informar um \"([^\"]*)\" inválido$")
	public void informar_um_inválido(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Então("^o sistema deve informar que o usuário ou senha está incorreto$")
	public void o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^inserir uma \"([^\"]*)\" inválido$")
	public void inserir_uma_inválido(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^informar um \"([^\"]*)\" vazio$")
	public void informar_um_vazio(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^inserir uma \"([^\"]*)\" vazio$")
	public void inserir_uma_vazio(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
