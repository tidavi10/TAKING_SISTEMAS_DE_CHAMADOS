import React, { useCallback, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import schema from './schema'

import './index.css'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';


export default function LoginAdm() {
    const history = useHistory();

    const { loginAdm } = useAuth();
     
    const handleSubmit = useCallback((data) => {
        try {
            loginAdm({
                email: data.email,
                senha: data.senha
            });

            console.log(data)
        } catch (error) {
            alert('Não foi possível logar.')
        }
        
    }, [loginAdm]);

    return (
        <>
            <div className="container-adm">
                <Formik className="formik-adm"
                    // validationSchema={schema}
                    onSubmit={handleSubmit}
                    validateOnMount
                    initialValues={{
                        email: '',
                        senha: '',
                    }}
                    render={({ isValid }) => (
                    <Form className="form-adm">
                        <img className="img-adm" src={logo} />
                        <h1 className="title-adm">Login</h1>
                        <div className="div-adm">
                            <label>E-mail:</label>
                            <Field type="email" name="email" className="input-adm" />
                            <div className="Form-erro-adm">
                                <ErrorMessage name="email" component="spam" />
                            </div>
                        </div>
                         <div className="div-adm">
                            <label>Senha:</label>
                            <Field type="password" name="senha" className="input-adm" />
                            <div className="Form-erro-adm">
                                <ErrorMessage name="password" component="spam" />
                            </div>
                        </div>
                        <button className="button-adm" type="submit" disabled={!isValid} onClick={handleSubmit}>Login</button>
                        
                    </Form>
                    )}          
                />
            </div>
        </>
    )
}