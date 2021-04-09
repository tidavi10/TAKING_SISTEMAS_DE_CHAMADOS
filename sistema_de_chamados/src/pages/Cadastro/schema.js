import * as Yup from 'yup';

export default Yup.object().shape({
    senha: Yup.string().required('*Digite sua senha por favor').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/, "*8 digitos no mínimo, utilizar no mínimo 1 caracter especial e números "),
    email: Yup.string().email('*E-mail inválido').required('*Digite seu e-mail'),
    nome: Yup.string().required('*Digite seu nome completo'),
    cpf: Yup.string().matches(/^\d{3}\d{3}\d{3}\d{2}$/,  '*Digite só números (11 caracteres)').required('*Digite seu CPF '),
    rg: Yup.string().min(6, '*Digite só números').max(9, '*Digite só números').required('*Digite seu RG '),
    cep: Yup.string().matches(/^\d{5}\d{3}$/, '*Digite só números (8 caracteres)').required('*Digite seu cep '),
    endereco: Yup.string().required('*Digite seu endereço'),
    cargo: Yup.string().min(3, 'Digite um cargo válido').matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'digite somente letras').required('*Digite seu cargo'),
});