import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schema";
import "./index.css";
import logo from "../../assets/logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginSocial from "./social";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

export default function Login() {
  const [loginButtonType, setLoginButtonType] = useState('');
  const { addToast } = useToast();
  const { loginUser, loginAdm } = useAuth();

  const handleSubmit = useCallback(async (data, actions) => {
    try {
      if (loginButtonType === "login") {
        await loginUser({
          email: data.email,
          senha: data.senha,
          nome: data.nome,
          tipoUsuario: "USUARIO",
        });
        history.push("/chamados");
        addToast({
          type: "success",
          title: "Login efetuado com sucesso",
        });
      } else {
          await loginAdm({
            email: data.email,
            senha: data.senha,
          });
          history.push('/menu-adm')
        } 
    } catch (error) {
        addToast({
          type: "error",
          title: "Login incorreto, verifique sua senha ou email",
        });
      }
    });

  const history = useHistory();

  return (
    <>
      <div className="container-login">
        <Formik
          className="formik"
          validationSchema={schema}
          onSubmit={handleSubmit}
          validateOnMount
          initialValues={{
            email: "",
            senha: "",
          }}
        >
          {({ isValid }) => (
            <Form className="form-login">
              <img src={logo} />
              <h1 className="title-login">Login</h1>
              <div className="input-div">
                <label>E-mail:</label>
                <Field className="input" type="email" name="email" />
                <div className="Form-erro">
                  <ErrorMessage name="email" component="span" />
                </div>
              </div>
              <div className="input-div">
                <label>Senha:</label>
                <Field className="input" type="password" name="senha" />
                <div className="Form-erro">
                  <ErrorMessage name="senha" component="span" />
                </div>
              </div>

              <button className="login" type="submit" disabled={!isValid} onClick={() => {
                setLoginButtonType("login");
              }}>
                Login
              </button>
              <ToastContainer />
              <button className="cadast" type="submit" onClick={() => {
                setLoginButtonType("loginAdm");
              }}>
                Logar como Adm
              </button>
              <p>
                <small>
                  Primeiro acesso? Cadastre-se{" "}
                  <a href="https://projetochamadosfrontendtaking.herokuapp.com/cadastro">
                    aqui
                  </a>
                </small>
              </p>
              <hr></hr>
              <div className="social">
                <LoginSocial />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

