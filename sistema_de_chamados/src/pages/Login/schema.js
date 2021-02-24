import * as Yup from 'yup';

export default Yup.object().shape({
    password: Yup.string().min(5).required('campo vazio'),
    email: Yup.string().email('Digite um email válido').required('campo vazio'),
});

