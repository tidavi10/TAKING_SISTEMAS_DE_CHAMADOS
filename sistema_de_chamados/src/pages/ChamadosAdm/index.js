import React, {useEffect, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';

import Pagination from './components/Pagination';
import { listarChamadosAdm, totalPaginasAdm } from '../../services/api'

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import logo from '../../assets/logo.png';

import { AuthContext } from '../../hooks/auth';
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

export default function ChamadosAdm(props) {
    const authContext = useContext(AuthContext)
    const history = useHistory();
    const { nome, id } = useAuth();

    const listarChamadosAdm = function (numeroPagina) {
        return api.get(`chamados/adm/${id}/${numeroPagina}`)
    }

    const [state, setState] = useState({ 
        activePage: 1,
        posts: [],
        postsPerPage: 5,
    });

    const [listaDeChamados, setlistaDeChamados] = useState([]);

    const [totalDeChamdos, setTotalDeChamados] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);

    const [totalDePaginas, setTotalDePaginas] = useState(-1);
  
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        totalPaginasAdm().then(call => call.data).then(call => {
            console.log(call)
          setTotalDePaginas(call)
          console.log(call)
          setLoading(false)
        })
      },[0]);

    useEffect(() => {
        setLoading(true);    
        listarChamadosAdm(currentPage).then(call => call.data).then(call => {
            console.log(call)
            setlistaDeChamados(call)
            setState({ ...state, 
                totalChamados: Number.parseInt(call.totalChamados)
            });
            setLoading(false)
        })
    }, [currentPage]);

    const onPageChanged = data => {
        setLoading(true)
        setCurrentPage(data.currentPage - 1)
    }

    const goToEditCall = (callId) => {
        localStorage.setItem('@chamadosTaking:idChamado', callId);

        history.push('/edicao-chamados-adm');
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
                        <CallEditButton onClick={() => goToEditCall(call.id)}>
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
                <p>{nome}</p>
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