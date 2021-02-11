import React from 'react';
import {Container} from './styles';


export default function Login() {
    return (
        <Container>
            <h1>Tela de Login</h1>
        <img src="/img/1560831383965.png"/>
    <div id="main-container">
        <h1>Login</h1>
        <form id="register-form">
            <div class="full-box">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail (exemplo@outlook.com)"/> 
            </div>
            <div class="full-box">
                <label for="password spacing">Senha de login</label>
                <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
            </div>  
            <div class="full-box">
                <input type="submit" id="agreement" value="Login"/>
            </div>
        </form>  
    </div>
    </Container>

)
}