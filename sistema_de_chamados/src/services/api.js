import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE2MTUyOTQ4MjMsImV4cCI6MTYxNTMxMjgyM30.aBBDcVJ7flQGDLgVLF8QBDauNUyTe4eI1wHBesph5Z0'
    }
});

const listarPossiveisProblemas = function () {
    return api.get('problema')
}


const listarChamados = function (numeroDaPagina) {
    return api.get(`chamados/pagina/${numeroDaPagina}`)
}


export {listarPossiveisProblemas, listarChamados};




export default api