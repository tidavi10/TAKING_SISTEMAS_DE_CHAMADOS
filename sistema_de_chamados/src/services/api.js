import axios from 'axios';

const api = axios.create({
    baseURL: "https://projetochamadosbackendtaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJpYXQiOjE2MTU3MzEzNjIsImV4cCI6MTYxNTc0OTM2Mn0.Rj7cBM8O0sXZvyMWGDH7NYvZjaSxinGKcl3O_jlIzKM'
    }
});

const cadastro = function (body) {
    return api.post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return api.get('problema')
}

const cadastrarChamado = function (descricaoProblema, formData) {
    return api.post(`chamados/${10}/${2}/${6}?descricaoProblema=${descricaoProblema}`, formData,
    {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

const listarChamados = function (numeroPagina) {
    return api.get(`chamados/usuario/${10}/${numeroPagina}`)
}

const listarChamadosMock = function (numeroPagina) {
    return axios.get('http://localhost:3001/chamados/'+ numeroPagina)
}

export default api;

export {listarPossiveisProblemas,listarChamadosMock, listarChamados, cadastro, cadastrarChamado};
