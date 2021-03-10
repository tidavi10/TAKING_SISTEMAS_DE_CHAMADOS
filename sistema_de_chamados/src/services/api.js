import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJpYXQiOjE2MTUzOTM0MzksImV4cCI6MTYxNTQxMTQzOX0.3QdRqlATrdaL0u0z-uyp4ln7OsJgCChKy1letbH5KE4'
    }
});

const cadastro = function (body) {
    return api.post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return api.get('problema')
}


const listarChamados = function (numeroPagina) {
    return api.get(`chamados/usuario/${10}/${numeroPagina}`)
}

export default api;

export {listarPossiveisProblemas, listarChamados, cadastro};
