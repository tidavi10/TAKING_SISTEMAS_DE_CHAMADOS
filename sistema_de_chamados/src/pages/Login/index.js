import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginSocial from './social'


export default function Login() {

    const successToast = () => {
        toast.success("Login efetuado com sucesso",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }


    function onSubmit(values, actions) {
        history.push('/chamados')
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
                successToast={successToast}
                validateOnMount
                initialValues={{
                email: '',
                password: '',
                    }}
                    render={({isValid}) => (
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
                        <Field className="input" type="password" name="password"/>
                        <div className="Form-erro">
                            <ErrorMessage  name="password" component="spam" /> 
                        </div>                                     
                    </div>

                    <button className="login" type="submit" disabled={!isValid} onClick={successToast}>Login</button>
                    <ToastContainer/>
                    <button className="cadast" type="submit" onClick={gotoCadastro}>Cadastro</button>
                    <p className="par">OU</p>
                    <hr></hr>
                    <div className="social"> 
                        <LoginSocial/>
                    </div>
                </Form>  
                )} 
            />       
        </div>
    </>
)
}
