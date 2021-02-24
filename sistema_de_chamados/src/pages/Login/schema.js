import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string().required('Campo vazio, digite sua senha por favor!').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 
    "Deve conter 8 caracteres, uma maiúscula, uma minúscula, um número e um carácter especial" ),
    email: Yup.string().email('Digite um email válido').required().required('campo vazio'),
});

