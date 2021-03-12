import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';

import Pagination from './components/Pagination';
import {listarChamados} from '../../services/api'

import logo from '../../assets/logo.png';

import {
    Container,
    Header,
    HeaderContent,
    Img,
    ButtonHeader,
    CallsBox,
    LegendCalls,
    CallItem,
    CallCod,
    CallType,
    CallStatus,
    CallEditButton,
    InvisibleElement
} from './style';

export default function ChamadosAdm() {
    const history = useHistory();

    const [state, setState] = useState({ 
        activePage: 1,
        posts: [],
        loading: false,
        totalChamados: 5,
        currentPage: 0,
        postsPerPage: 2, 
      });

    const [listaDeChamados, setlistaDeChamados] = useState([]);

    useEffect(() => {
        setState({ ...state, loading: true });
    
        listarChamados(state.activePage - 1).then(call => call.data).then(call => {
            console.log(call)
          setlistaDeChamados(call)
          setState({ ...state, loading: false });
        })
      }, [state.activePage]);

    const { currentPage, postsPerPage, posts, loading } = state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => {
        setState({ ...state, loading: true });
        listarChamados(pageNum).then(call => call.data).then(call => {
        setlistaDeChamados(call)
        setState({ ...state, loading: false, currentPage: pageNum });
        });
    }

    function getPaginated() {
        return listaDeChamados
    }

    function handlerPageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        setState({ activePage: pageNumber });
    }
    

    const goToEditCall = () => {
        history.push('/edicao-chamados-adm')
    }

    function renderCallBox () {
    if (state.loading) {
      return <h1>Carregando</h1>
    }
    return (
        <CallsBox>
            <LegendCalls>
                <p>Cod.</p>
                <p>Descrição</p>
                <p>Status</p>
            </LegendCalls>
            {
                listaDeChamados.map(call =>
                    <CallItem key={call.id}>
                        <CallCod>
                            <p>{call.id}</p>
                        </CallCod>
                        <CallType>
                            <p>{call.descricao}</p>
                        </CallType>
                        <CallStatus>
                            <p>{call.status}</p>
                        </CallStatus>
                        <CallEditButton onClick={goToEditCall}>
                            <FiEdit />
                        </CallEditButton>
                    </CallItem>
                )
            }
        </CallsBox>)
    }
    
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Img src={logo}></Img>
                    <ButtonHeader>
                        <p>Chamados</p>
                    </ButtonHeader>
                    <ButtonHeader>
                        <p>Meus dados</p>
                    </ButtonHeader>
                </HeaderContent>
                <p>Usuário Logado</p>
            </Header>

            { renderCallBox() }

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={state.totalChamados}
                paginate={paginate}
            />
        </Container>
    )
}