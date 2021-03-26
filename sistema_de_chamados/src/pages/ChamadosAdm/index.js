import React, {useEffect, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';

import Pagination from './components/Pagination';
import getBaseAPI, { listarChamadosAdm, totalPaginasAdm } from '../../services/api'

import { useAuth } from '../../hooks/auth';

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
    Page
} from './style';

export default function ChamadosAdm() {
    const history = useHistory();
    const { usuario } = useAuth();
    
    const [state, setState] = useState({ 
        activePage: 1,
        posts: [],
        postsPerPage: 5,
    });

    const [listaDeChamados, setlistaDeChamados] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [totalDePaginas, setTotalDePaginas] = useState(-1);
  
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        totalPaginasAdm().then(call => call.data).then(call => {
          setTotalDePaginas(call)
          console.log(call)
          setLoading(false)
        })
      }, []);
    
    useEffect(() => {
        setLoading(true)
        listarChamadosAdm(currentPage).then(call => call.data).then(call => {
          setlistaDeChamados(call)
          console.log(call)
          setLoading(false)
        })
      }, [currentPage]);

    const onPageChanged = data => {
        setLoading(true)
        setCurrentPage(data.currentPage - 1)
    }

    const goToEditCall = (call) => {
        localStorage.setItem('@chamadosTaking:idChamado', call.id);

        history.push('/edicao-chamados-adm');
    }

    function renderCallBox () {
    if (state.loading) {
      return <h2>Carregando...</h2>
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
                        <CallEditButton onClick={() => goToEditCall(call)}>
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
                <p>{usuario.name ? usuario.name : usuario.email}</p>
            </Header>

            { renderCallBox() }
            <Page>
                <Pagination
                    pageLimit={state.postsPerPage} 
                    totalRecords={totalDePaginas * state.postsPerPage} 
                    onPageChanged={onPageChanged}
                    pageNeighbours={1}
                />
            </Page>
        </Container>
    )
}