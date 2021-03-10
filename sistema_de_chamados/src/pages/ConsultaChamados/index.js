import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Pagination from './components/Pagination';
//import Pagination from 'react-js-pagination';
import {listarChamados} from '../../services/api';
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

    listarChamados(state.activePage - 1).then(d => d.data).then(d => {
      setlistaDeChamados(d)
      setState({ ...state, loading: false });
    })
  }, [state.activePage]);

  const { currentPage, postsPerPage, posts, loading } = state;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => {
    setState({ ...state, loading: true });
    listarChamados(pageNum).then(d => d.data).then(d => {
      setlistaDeChamados(d)
      setState({ ...state, loading: false, currentPage: pageNum });
    })
  }

  function getPaginated() {
    return listaDeChamados
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

  function renderCallBox () {
    if (state.loading) {
      return <h1>Carregando</h1>
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
        <Title>Chamados em aberto</Title>
        { renderCallBox() }
        <Pagination postsPerPage={postsPerPage} totalPosts={state.totalChamados} paginate={paginate} />
        <div>
          {
            // <Posts posts={posts} loading={loading} />
            // <Pagination postsPerPage={postsPerPage} totalPosts={state.totalChamados} paginate={paginate} />
          }
        </div>
        {/* <>
          <Pagination
            activePage={state.activePage}
            itemsCountPerPage={2}
            totalItemsCount={listaDeChamados.length}
            pageRangeDisplayed={5}
            onChange={handlerPageChange}
          />
        </> */}
      </Container>
    </Router>
  )
}
  