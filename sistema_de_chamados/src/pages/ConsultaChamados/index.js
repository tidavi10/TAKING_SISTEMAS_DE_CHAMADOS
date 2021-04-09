import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.png";

import Pagination from "./components/Pagination";
import {
  listarChamados,
  getTotalPaginas,
} from "../../services/api";
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
  Page,
  HeaderContentRight,
  Logout,
} from "./style";
import { Img } from "../ConsultaChamados/style";
import { Loader } from "../../components/Loader";
import { FiLogOut } from "react-icons/fi";

export default function ConsultaChamados(props) {
  const { usuario } = useAuth();
  const history = useHistory();
  const [state, setState] = useState({
    activePage: 1,
    posts: [],
    postsPerPage: 5,
    totalDePaginas: -1,
  });

  const [totalDeChamdos, setTotalDeChamados] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(false);

  const [listaDeChamados, setlistaDeChamados] = useState([]);

  const [totalDePaginas, setTotalDePaginas] = useState(-1);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true
    getTotalPaginas(usuario.id, totalDePaginas)
      .then((d) => d.data)
      .then((d) => {
        if (isSubscribed) {
          setTotalDePaginas(d);
          setLoading(false);
        }
      });
      return () => isSubscribed = false;
  }, []);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true
    listarChamados(usuario.id, currentPage)
      .then((d) => d.data)
      .then((d) => {
        if (isSubscribed) {
          setlistaDeChamados(d);
          setState({
            ...state,
            totalDeChamdos
          });
          setLoading(false);
        }
      });

      return () => isSubscribed = false;
  }, [currentPage]);

  const onPageChanged = (data) => {
    setLoading(true);
    setCurrentPage(data.currentPage - 1);
  };

  const goToChamados = () => {
    history.push("/chamados");
  };

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  function renderCallBox() {

    return (
      <CallsBox>
        <LegendCalls>
          <span>Cod.</span>
          <span>Descrição</span>
          <span>Status</span>
        </LegendCalls>
        { loading &&  <Loader /> }
        {!loading && listaDeChamados.map((d) => (
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
        ))}
        <Page>
          <Pagination
            pageLimit={state.postsPerPage}
            totalRecords={totalDePaginas * state.postsPerPage}
            onPageChanged={onPageChanged}
            pageNeighbours={1}
          />
        </Page>
      </CallsBox>
    );
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
          </HeaderContent>
          <HeaderContentRight>
            <p>{usuario.name ? usuario.name.split(' ')[0] : usuario.email}</p>
            <Logout onClick={logout}>
              <FiLogOut color="#ffecd1" />
            </Logout> 
          </HeaderContentRight>
        </Header>
        {renderCallBox()}
      </Container>
    </Router>
  );
}
