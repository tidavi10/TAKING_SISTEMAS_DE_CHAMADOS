import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';


export default function Login() {

    function onSubmit(values, actions) {
        history.push('/chamados');
    }

    const history = useHistory();

    const gotoCadastro = () => {
        history.push('/cadastro')
    }

    const gotoChamados = () => {
        history.push('/chamados')
    }

    return (
    <>
        <div id="container">
            <Formik id="formik"
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                email: '',
                password: '',
                    }}
                    render={({isValid}) => (
                <Form id="form">
                    <h1>Login</h1>
                    <div id="input-div">
                        <label>E-mail:</label>
                        <Field id="input" type="email" name="email"/> 
                        <div id="Form-erro">
                            <ErrorMessage name="email" component="spam" />
                        </div>
                    </div>
                    <div id="input-div">
                        <label>Senha:</label>   
                        <Field id="input" type="password" name="password"/>
                        <div id="Form-erro">
                            <ErrorMessage  name="password" component="spam" /> 
                        </div>                                     
                    </div>
                    <button type="submit" disabled={!isValid} onClick={onSubmit}>Login</button>
                    <button type="submit">Login Social</button>
                    <button type="submit" onClick={gotoCadastro}>Cadastro</button>
                    <img src={logo} />
                </Form>  
                )}          
            />
                
        </div>
    </>
)
}