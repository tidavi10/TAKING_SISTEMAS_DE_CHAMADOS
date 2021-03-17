import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

import Pagination from './components/Pagination';
import {listarChamados, getTotalDeChamados } from '../../services/api';
import {
  Container,
  Header,
  HeaderContent,
  ButtonHeader,
  ButtonExit,
  CallsBox,
  LegendCalls,
  CallItem,
  CallCod,
  CallType,
  CallStatus,
  Page
} from './style';
import { Img } from '../ChamadosAdm/style';

export default function ChamadosAdm() {
  const history = useHistory();
  const [ state, setState] = useState({ 
    activePage: 1,
    posts: [],
    totalChamados: 0,
    postsPerPage: 5, 
  });

  //mudar para email do usuário
  const { admEmail, name } = useAuth();

  const [totalDeChamdos, setTotalDeChamados] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  
  const [loading, setLoading] = useState(false); 

  const [listaDeChamados, setlistaDeChamados] = useState([]);

  useEffect(() => {
    setLoading(true)
    getTotalDeChamados().then(d => d.data).then(d => {
      setTotalDeChamados(d)
      console.log(d)
      setLoading(false)
    })
  },[0]);

  useEffect(() => {
    setLoading(true)
    listarChamados(currentPage).then(d => d.data).then(d => {
      setlistaDeChamados(d)
      console.log(d)
      setState({
        ...state
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
            <Img src={logo} />
              <ButtonHeader type="submit" onClick={goToChamados}>
                <p>Abrir novo chamado</p>
              </ButtonHeader>
              <ButtonExit type="submit" onClick={logout}>
                <p>Sair</p>
              </ButtonExit>
          </HeaderContent>
          <p>{!name || name != undefined ? admEmail : name}</p>
        </Header>
        { renderCallBox() }
        <Page>
          <Pagination
            pageLimit={state.postsPerPage} 
            totalRecords={totalDeChamdos} 
            onPageChanged={onPageChanged}
            pageNeighbours={1}
          />
        </Page>
      </Container>
    </Router>
  )
}
  