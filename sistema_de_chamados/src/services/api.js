import axios from 'axios';

const getBaseAPI = () => {
    const data = localStorage.getItem('@chamadosTaking:usuario');

    const parsedData = JSON.parse(data);
    let headers = {}
    if (parsedData) {
        headers['Authorization'] = parsedData.token
    }
    return axios.create({
        baseURL: "https://projetochamadosbackendtaking.herokuapp.com/",
        headers
    });
}

const getBaseAdmAPI = () => {
    const data = localStorage.getItem('@chamadosTaking:adminUser');
    const parsedData = JSON.parse(data);
    let headers = {}
    if (parsedData) {
        headers['Authorization'] = parsedData.token
    }
    return axios.create({
        baseURL: "https://projetochamadosbackendtaking.herokuapp.com/",
        headers
    });
}

const cadastrarUsuario = function (body) {
    return getBaseAPI().post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return getBaseAPI().get('problema')
}

const cadastrarChamado = function (userId, problemId, descricaoProblema, formData) {
    return getBaseAPI().post(`chamados/${userId}/${problemId}?descricaoProblema=${descricaoProblema}`, formData,
    {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

const getTotalDeChamados = function (userId) {
    return getBaseAPI().get(`chamados/totalPaginas/usuario/${userId}`)
}

const getTotalPaginas = function (userId) {
    return getBaseAPI().get(`chamados/totalPaginas/usuario/${userId}`)
}

const listarChamados = function (userId , numeroPagina) {
    return getBaseAPI().get(`chamados/usuario/${userId}/${numeroPagina}`)
}

const listarChamadosAdm = function (numeroPagina) {
    return getBaseAdmAPI().get(`chamados/adm/all/${numeroPagina}`)
}

const totalPaginasAdm = function () {
    return getBaseAdmAPI().get('chamados/totalPaginas/adm')
}

const listarRespostasChamado = function (idChamado, id) {
    return getBaseAPI().put(`/resolucao/resposta/${idChamado}/${id}`)
}

export default getBaseAPI;

export {
    listarPossiveisProblemas,
    listarChamados, 
    getTotalPaginas,
    listarChamadosAdm, 
    getTotalDeChamados,
    cadastrarChamado,
    cadastrarUsuario,
    totalPaginasAdm,
    listarRespostasChamado,
    getBaseAdmAPI
};
