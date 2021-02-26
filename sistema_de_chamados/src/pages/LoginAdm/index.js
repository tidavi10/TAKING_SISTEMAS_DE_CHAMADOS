import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'

import './index.css'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';


export default function LoginAdm() {
    const history = useHistory();
     
    function onSubmit(values, actions) {
        history.push('/menu-adm');
    } 
    

    return (
        <>
            <div className="container-adm">
                <Formik className="formik-adm"
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    validateOnMount
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    render={({ isValid }) => (
                    <Form className="form-adm">
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
                            <Field type="password" name="password" className="input-adm" />
                            <div className="Form-erro-adm">
                                <ErrorMessage name="password" component="spam" />
                            </div>
                        </div>
                        <button className="button-adm" type="submit" disabled={!isValid} onClick={onSubmit}>Login</button>
                        <img className="img-adm" src={logo} />
                    </Form>
                    )}          
                />
            </div>
        </>
    )
}