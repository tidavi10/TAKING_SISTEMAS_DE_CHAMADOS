import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE2MTUyOTEwMTAsImV4cCI6MTYxNTMwOTAxMH0.zhH85BpuXP12eUrhe67bMbqG2K5gKRvprSZp6MkwFRs'
    }
});

const listarPossiveisProblemas = function () {
    return api.get('problema')
}


const listarChamados = function (numeroDaPagina) {
    return api.get(`chamados/pagina/${numeroDaPagina}`)
}


export {listarPossiveisProblemas, listarChamados};