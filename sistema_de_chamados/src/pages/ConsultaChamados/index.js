import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Pagination from './components/Pagination';
import {listarChamados, listarChamadosMock} from '../../services/api';
import {
  Container,
  Header,
  HeaderContent,
  ButtonHeader,
  CallsBox,
  LegendCalls,
  CallItem,
  CallCod,
  CallType,
  CallStatus,
  ButtonExit
} from './style';

export default function ChamadosAdm() {
  const history = useHistory();
  const [ state, setState] = useState({ 
    activePage: 1,
    posts: [],
    totalChamados: 0,
    postsPerPage: 5, 
  });

  const [currentPage, setCurrentPage] = useState(0)
  
  const [loading, setLoading] = useState(false) 

  const [listaDeChamados, setlistaDeChamados] = useState([]);

  useEffect(() => {
    setLoading(true)
    listarChamadosMock(currentPage).then(d => d.data).then(d => {
      setlistaDeChamados(d.conteudo)
      setState({
        ...state,
        totalChamados: Number.parseInt(d.totalChamados)
      });
      setLoading(false)
    })
  }, [currentPage]);
  

  const onPageChanged = data => {
      setLoading(true)
      setCurrentPage(data.currentPage - 1)
  }

  const goToChamados = () => {
    history.push('/chamados');
  };


  function logout() {
    localStorage.clear();
    window.location.href= '/';
  }

  function renderCallBox () {
    if (loading) {
      return <h2>Carregando...</h2>
    }
    return <CallsBox>
    <LegendCalls>
      <span>Cod.</span>
      <span>Descrição</span>
      <span>Status</span>
    </LegendCalls>
    {
      listaDeChamados.map(d =>
        <CallItem key={d.id}>
          <CallCod>
            <span>{d.id}</span>
          </CallCod>
          <CallType>
            <span>{d.descricao}</span>
          </CallType>
          <CallStatus>
            <span>{d.status}</span>
          </CallStatus>
        </CallItem>
      )
    }
  </CallsBox>
  }

  return (
    <Router>
      <Container>
        <Header>
          <HeaderContent>
            <ButtonHeader type="submit" onClick={goToChamados}>
              <span>Abrir novo chamado</span>
            </ButtonHeader>
            <ButtonExit type="submit" onClick={logout}>
              <span>Sair</span>
            </ButtonExit>
          </HeaderContent>
          <span>username</span>
        </Header>
        { renderCallBox() }
        <Pagination
          pageLimit={state.postsPerPage} 
          totalRecords={state.totalChamados} 
          onPageChanged={onPageChanged}
          pageNeighbours={1}
        />
      </Container>
    </Router>
  )
}
  