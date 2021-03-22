import React, { useCallback } from 'react';
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import {
    BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/api'


export default function Cadastro() {

    const history = useHistory();

    const handlerEnviar = (dados, response, req) =>{
        cadastrarUsuario(dados)
            .then(dados => console.log(`Criado o item ${JSON.stringify(dados)}`)) 
            console.log(dados)
    }
    
    return (
        <Router>
            <Formik className="formik"
                validationSchema={schema}
                onSubmit={handlerEnviar}
                validateOnMount
                initialTouched={{
                    field: true,
                }}
                initialValues={{
                    nome: '',
                    email: '',
                    cpf: '',
                    rg: '',
                    cep: '',
                    endereco: '',
                    cargo: '',
                    senha: '',
                }}
            >
                {({ isValid, errors }) => (
             <div className="container-cadastro">
                <Form className="form-cadastro">
                    <h1 className="title-cadastro">Cadastro</h1>
                    <div className="parte">
                      <div className="parte1">
                        <div className="inputdiv">
                            <label>Nome:</label>
                                <Field className="input" type="text" name="nome"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="nome" component="spam" />
                            </div>
                        </div> 
                        <div className="inputdiv">
                            <label>E-mail:</label>
                            <Field className="input" type="email" name="email"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="email" component="spam" />
                            </div>
                        </div > 
                        <div className="inputdiv"> 
                            <label>CPF:</label>  
                                <Field className="input" type="text" name="cpf"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cpf" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>RG:</label>
                            <Field className="input" type="text" name="rg"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="rg" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>CEP:</label>
                            <Field className="input" type="text" name="cep"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cep" component="spam" />
                            </div>
                        </div>
                    </div>
                   <div className="parte2">
                        <div className="inputdiv">
                            <label>Endereço:</label>
                            <Field className="input" type="text" name="endereco"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="endereco" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>Cargo:</label>
                            <Field className="input" type="text" name="cargo"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cargo" component="spam" />
                            </div>
                            </div>
                        <div className="inputdiv">
                            <label>Senha:</label>
                            <Field className="input" type="password" name="senha" />
                            <div className="Form-erro">
                            <ErrorMessage className="erro" name="senha" component="spam" />
                            </div>
                        </div>
                        <button className="Submit" type="submit" onClick={handlerEnviar}>Cadastrar</button>
                 </div>
                </div>

                    {/*<img src={logo} className="imagem" />*/}
                </Form>
            </div>
            
                )}
            </Formik>
        </Router>
    )
}

