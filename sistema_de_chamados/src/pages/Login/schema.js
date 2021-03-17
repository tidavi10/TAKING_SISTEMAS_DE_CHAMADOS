import * as Yup from 'yup';

export default Yup.object().shape({
    senha: Yup.string().required('*Campo vazio, digite sua senha por favor!').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/, 
    "*8 digitos no mínimo, utilizar no mínimo 1 caracter especial e números" ),
    email: Yup.string().email('*Digite um email válido').required().required('*Campo vazio, digite seu email por favor!'),
});

