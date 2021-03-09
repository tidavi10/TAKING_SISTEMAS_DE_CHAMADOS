import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string().required('*Campo vazio, digite sua senha por favor!').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/, "*8 digitos no mínimo, utilizar no mínimo 1 caracter especial e números "),
    email: Yup.string().email('*E-mail inválido').required('*campo vazio'),
    nome: Yup.string().min(0, '*Digite seu nome completo').required('*O campo está vazio'),
    cpf: Yup.string().matches(/^\d{3}\d{3}\d{3}\d{2}$/,  '*Digite só números').required('*Digite seu CPF por favor!'),
    rg: Yup.string().matches(/^\d{2}\d{3}\d{3}\d{1}$/, '*Digite só números').required('*Digite seu RG por favor!'),
    cep: Yup.string().matches(/^\d{5}\d{3}$/, '*Digite só números').required('*Digite seu cep por favor!'),
    endereco: Yup.string().required('*Digite seu endereço por favor!'),
    cargo: Yup.string().required('*Digit seu cargo por favor!'),
});