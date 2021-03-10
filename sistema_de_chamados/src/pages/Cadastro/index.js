import React from 'react';
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import {
    BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Cadastro() {

    const history = useHistory();


    const  [nome, setnome] = useState('')
    const  [email, setemail]  = useState('')
    const  [password, setpassword]  = useState('')
    const  [cep, setcep]  = useState('')
    const  [endereco, setendereco]  = useState('')
    const  [cpf, setcpf]  = useState('')
    const  [rg, setrg]  = useState('')
    const  [cargo, setcargo]  = useState('')


     async function handleSubmit(){

        const data = {nome:nome, email:email, senha:password, cep:cep, endereco:endereco, cpf:cpf, rg:rg, cargo: cargo}
        const response = await api.post('usuarios/cadastro', data)

        if(response.status=200){
           console.log(response.status) //window.location.href ='http://localhost:3000/chamados'
        }else{
            alert('Erro ao cadastrar usuário');
        }
        
        
    }

    return (
        <Router>
            <Formik className="formik"
                validationSchema={schema}
                onSubmit={handleSubmit}
                validateOnChange
                initialValues={{
                    nome: '',
                    email: '',
                    cpf: '',
                    rg: '',
                    cep: '',
                    endereco: '',
                    cargo: '',
                    password: '',
                }}
            >
                {({ isValid, errors }) => (
             <div className="container">
                <Form className="form">
                    <h1 className="title-cadastro">Cadastro</h1>
                    <div className="parte">
                      <div className="parte1">
                        <div className="inputdiv">
                            <label>Nome:</label>
                                <Field value={nome} onChange={e => setnome(e.target.value)} className="input" type="text" name="nome"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="nome" component="spam" />
                            </div>
                        </div> 
                        <div className="inputdiv">
                            <label>E-mail:</label>
                            <Field value={email} onChange={e => setemail(e.target.value)} className="input" type="email" name="email"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="email" component="spam" />
                            </div>
                        </div > 
                        <div className="inputdiv"> 
                            <label>CPF:</label>  
                                <Field value={cpf} onChange={e => setcpf(e.target.value)} className="input" type="text" name="cpf"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cpf" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>RG:</label>
                            <Field value={rg} onChange={e => setrg(e.target.value)} className="input" type="text" name="rg"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="rg" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>CEP:</label>
                            <Field value={cep} onChange={e => setcep(e.target.value)} className="input" type="text" name="cep"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cep" component="spam" />
                            </div>
                        </div>
                    </div>
                   <div className="parte2">
                        <div className="inputdiv">
                            <label>Endereço:</label>
                            <Field value={endereco} onChange={e => setendereco(e.target.value)} className="input" type="text" name="endereco"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="endereco" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>Cargo:</label>
                            <Field value={cargo} onChange={e => setcargo(e.target.value)} className="input" type="text" name="cargo"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cargo" component="spam" />
                            </div>
                            </div>
                        <div className="inputdiv">
                            <label>Senha:</label>
                            <Field value={password} onChange={e => setpassword(e.target.value)} className="input" type="password" name="password" />
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="password" component="spam" />
                            </div>
                        </div>
                        <button variant="contained" className="Submit" type="submit" onClick={handleSubmit}>Cadastrar</button>
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

