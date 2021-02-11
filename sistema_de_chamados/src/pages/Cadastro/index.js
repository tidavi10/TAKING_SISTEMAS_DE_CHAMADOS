import React from 'react';


export default function Cadastro() {
    return (
        <>
            <h1>Tela de cadastro</h1>
            <img src="/img/1560831383965.png"/>
                <div id="main-container">
                    <h1>Cadastro</h1>
                    <form id="register-form">
                        <div class="full-box">
                            <label for="name">Nome completo</label>
                            <input type="text" name="name" id="name" placeholder="Digite seu nome"/>
            </div>
                            <div class="full-box">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/> 
            </div>
                                <div class="full-box">
                                    <label for="cpf">CPF</label>
                                    <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF"/>
            </div>
                                    <div class="full-box">
                                        <label for="tel">Telefone</label>
                                        <input type="number" name="tel" id="tel" placeholder="Digite seu telefone (Exemplo (11)94949-2322)"/>
            </div>
                                        <div class="full-box">
                                            <label for="cpf">Cargo</label>
                                            <input type="text" name="cargo" id="cargo" placeholder="Digite seu Cargo"/>
            </div>
                                            <div class="full-box">
                                                <label for="password spacing">Senha de login</label>
                                                <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
            </div>
                                                <div class="full-box">
                                                    <input type="checkbox" name="agreement" id="agreement-label"/>
                                                        <label for="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
            </div>
        </form>
                                            </div>
        </>
    )
}