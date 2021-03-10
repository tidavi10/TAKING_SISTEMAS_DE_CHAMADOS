import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE2MTUzMTE0ODgsImV4cCI6MTYxNTMyOTQ4OH0.AryLscc6lSly7WqhJBr8ftU6tUv7ltJCe0ADedrufYw'
    }
});

const cadastro = function (body) {
    return api.post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return api.get('problema')
}


const listarChamados = function (numeroDaPagina) {
    return api.get(`chamados/pagina/${numeroDaPagina}`)
}

export default api;

export {listarPossiveisProblemas, listarChamados, cadastro};