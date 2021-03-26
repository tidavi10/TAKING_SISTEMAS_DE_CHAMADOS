import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import logo from '../../assets/logo.png'

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginSocial from './social'
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';


export default function Login() {
    const {addToast} = useToast();
    const { loginUser } = useAuth();
    const handleSubmit = useCallback(async (data, actions) => {
        try {
            //console.log(data)
            await loginUser({
                email: data.email,
                senha: data.senha,
                nome: data.nome,
                tipoUsuario: 'USUARIO'
            });
            history.push('/chamados')
            addToast({
                type: 'success',
                title: 'Login efetuado com sucesso',
            });
        } catch (error) {
            addToast({
                type: 'error',
                title: 'Login incorreto, verifique sua senha ou email'
            });
        }
    });


    const history = useHistory();

    const gotoCadastro = () => {
        history.push('/login-adm')
    }

    return (
    <>
        <div className="container-login">
            <Formik className="formik"
                validationSchema={schema}
                onSubmit={handleSubmit}
                validateOnMount
                initialValues={{
                email: '',
                senha: '',
                    }}
                >  
                {({isValid}) => (
                <Form className="form-login">
                            <img src={logo} />
                    <h1 className="title-login">Login</h1>
                    <div className="input-div">
                        <label>E-mail:</label>
                        <Field className="input" type="email" name="email"/> 
                        <div className="Form-erro">
                            <ErrorMessage name="email" component="spam" />
                        </div>
                    </div>
                    <div className="input-div">
                        <label>Senha:</label>   
                        <Field className="input" type="password" name="senha"/>
                        <div className="Form-erro">
                            <ErrorMessage  name="senha" component="spam" /> 
                        </div>                                     
                    </div>

                    <button className="login" type="submit" disabled={!isValid}>Login</button>
                    <ToastContainer/>
                    <button className="cadast" type="submit" onClick={gotoCadastro}>Logar como Adm</button>
                    <p><small>Primeiro acesso? Cadastre-se <a href="http://localhost:3000/cadastro">aqui</a></small></p>
                    <p className="par">OU</p>
                    <hr></hr>
                    <div className="social"> 
                        <LoginSocial/>
                    </div>
                </Form>  
                )} 
            </Formik>
        </div>
    </>
)
}
