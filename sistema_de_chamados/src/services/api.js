import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJpYXQiOjE2MTU0MTgyMzgsImV4cCI6MTYxNTQzNjIzOH0.Z5UocX8zh-EmMnx0PTnlwTljwzQvg9_EppQatmiLy3k'
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

const listarChamadosAdm = function (numeroPagina) {
    return api.get(`chamados/adm/${10}/${numeroPagina}`)
}

export default api;

export {listarPossiveisProblemas, listarChamados, cadastro, listarChamadosAdm, cadastrarChamado};
