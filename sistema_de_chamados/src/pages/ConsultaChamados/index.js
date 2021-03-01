import React, { useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Pagination from 'react-js-pagination';
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
  Title,
  ButtonExit
} from './style';
import { useHistory } from 'react-router-dom';

export default function ChamadosAdm() {
  const history = useHistory();

  const [state, setState] = useState({ activePage: 1 });

  const [listaDeChamados, setlistaDeChamados] = useState([
    { id: 55, descricao: 'Teste5', status: 'P' },
    { id: 56, descricao: 'Teste6', status: 'C' },
    { id: 57, descricao: 'Teste7', status: 'A' },
  ])

  function getPaginated() {
    return listaDeChamados.filter((_, idx) => idx >= ((state.activePage - 1) * 2) && idx < (state.activePage) * 2)
  }

  const goToChamados = () => {
    history.push('/chamados');
  };

  function handlerPageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setState({ activePage: pageNumber });
  }

  function logout() {
    localStorage.clear();
    window.location.href= '/';
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
        <Title>Chamados em aberto</Title>
        <CallsBox>
          <LegendCalls>
            <span>Cod.</span>
            <span>Descrição</span>
            <span>Status</span>
          </LegendCalls>
          {
            getPaginated().map(d =>
              <CallItem>
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
        <>
          <Pagination
            activePage={state.activePage}
            itemsCountPerPage={2}
            totalItemsCount={listaDeChamados.length}
            pageRangeDisplayed={5}
            onChange={handlerPageChange}
          />
        </>
      </Container>
    </Router>
  )
}
