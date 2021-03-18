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

const cadastrarUsuario = function (body) {
    return getBaseAPI().post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return getBaseAPI().get('problema')
}

const cadastrarChamado = function (descricaoProblema, formData) {
    return getBaseAPI().post(`chamados/${10}/${2}/${6}?descricaoProblema=${descricaoProblema}`, formData,
    {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

const getTotalDeChamados = function () {
    return getBaseAPI().get(`chamados/usuario/${10}`)
}

const listarChamados = function (numeroPagina) {
    return getBaseAPI().get(`chamados/usuario/${10}/${numeroPagina}`)
}

const listarChamadosAdm = function (numeroPagina) {
    return getBaseAPI().get(`chamados/adm/${2}/${numeroPagina}`)
}

const listarRespostasChamado = function (idChamado, id) {
    return getBaseAPI().put(`/resolucao/resposta/${idChamado}/${id}`)
}

export default getBaseAPI

export {
    listarPossiveisProblemas,
    listarChamados, 
    listarChamadosAdm, 
    getTotalDeChamados,
    cadastrarChamado,
    cadastrarUsuario,
    listarRespostasChamado
};
