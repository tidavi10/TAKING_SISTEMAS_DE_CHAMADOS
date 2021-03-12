import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string().required('*Digite sua senha por favor').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/, "*8 digitos no mínimo, utilizar no mínimo 1 caracter especial e números "),
    email: Yup.string().email('*E-mail inválido').required('*Digite seu e-mail'),
    nome: Yup.string().required('*Digite seu nome completo teste'),
    cpf: Yup.string().matches(/^\d{3}\d{3}\d{3}\d{2}$/,  '*Digite só números').required('*Digite seu CPF '),
    rg: Yup.string().matches(/^\d{2}\d{3}\d{3}\d{1}$/, '*Digite só números').required('*Digite seu RG '),
    cep: Yup.string().matches(/^\d{5}\d{3}$/, '*Digite só números').required('*Digite seu cep '),
    endereco: Yup.string().required('*Digite seu endereço '),
    cargo: Yup.string().required('*Digite seu cargo'),
});