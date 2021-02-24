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

    const armazenaTokenSession = () => {
        let token = 'ahushaushaushuas';

        sessionStorage.setItem('token', token);

        setTimeout(() => {
            sessionStorage.clear();
        }, 3000);
    ;}

    return (
    <>
        <div className="container-login">
            <Formik className="formik"
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                email: '',
                password: '',
                    }}
                    render={({isValid}) => (
                <Form className="form-login">
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
                        <Field className="input" type="password" name="password"/>
                        <div className="Form-erro">
                            <ErrorMessage  name="password" component="spam" /> 
                        </div>                                     
                    </div>
                    <button className="login" type="submit" disabled={!isValid} onClick={onSubmit}>Login</button>
                    <button className="login-social" type="submit">Login Social</button>
                    <button className="cadast" type="submit" onClick={gotoCadastro}>Cadastro</button>
                    <img src={logo} />
                </Form>  
                )}          
            />
                
        </div>
    </>
)
}
