import * as Yup from 'yup';

export default Yup.object().shape({
    senha: Yup.string().required('*Campo vazio, digite sua senha por favor!'),
    email: Yup.string().email('*Digite um email válido').required().required('*Campo vazio, digite seu email por favor!'),
});

