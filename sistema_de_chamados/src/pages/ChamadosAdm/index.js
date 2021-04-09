import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FiEdit } from "react-icons/fi";

import Pagination from "./components/Pagination";
import { listarChamadosAdm, totalPaginasAdm } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.png";

import { FiLogOut } from "react-icons/fi";

import {
  Container,
  Header,
  HeaderContentLeft,
  HeaderContentRight,
  Logout,
  Img,
  ButtonHeader,
  CallsBox,
  LegendCalls,
  CallItem,
  CallCod,
  CallType,
  CallStatus,
  CallEditButton,
  Page,
} from "./style";
import { Loader } from "../../components/Loader";

export default function ChamadosAdm() {
  const history = useHistory();
  const { admin } = useAuth();

  const [state, setState] = useState({
    activePage: 1,
    posts: [],
    postsPerPage: 5,
    totalDePaginas: -1,
  });

  const [listaDeChamados, setlistaDeChamados] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [totalDePaginas, setTotalDePaginas] = useState(-1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    totalPaginasAdm()
      .then((call) => call.data)
      .then((call) => {
        if (isSubscribed) {
          setTotalDePaginas(call);
          setLoading(false);
        }
      });

    return () => (isSubscribed = false);
  }, []);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    listarChamadosAdm(currentPage)
      .then((call) => call.data)
      .then((call) => {
        if (isSubscribed) {
          setlistaDeChamados(call);
          setLoading(false);
        }
      });

      return () => isSubscribed = false;
  }, [currentPage]);

  const onPageChanged = (data) => {
    setLoading(true);
    setCurrentPage(data.currentPage - 1);
  };

  const goToEditCall = (call) => {
    localStorage.setItem("@chamadosTaking:idChamado", call.id);

    history.push("/edicao-chamados-adm");
  };

  const goToChamadosAdm = () => {
    history.push("/chamados-adm");
  };

  const handleAdmLogout = async () => {
    localStorage.removeItem("@chamadosTaking:adminUser");

    history.push("/");
  };

  function renderCallBox() {
    if (loading) {
      return <Loader />;
    }
    return (
      <CallsBox>
        <LegendCalls>
          <p>Cod.</p>
          <p>Descrição</p>
          <p>Status</p>
        </LegendCalls>
        {listaDeChamados.map((call) => (
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
    <Container>
      <Header>
        <HeaderContentLeft>
          <Img src={logo}></Img>
          <ButtonHeader onClick={goToChamadosAdm}>
            <p>Tela de Chamados</p>
          </ButtonHeader>
        </HeaderContentLeft>
        <HeaderContentRight>
          <p>{admin.name ? admin.name.split(' ')[0] : admin.email}</p>
          <Logout onClick={handleAdmLogout}>
            <FiLogOut color="#ffecd1" />
          </Logout>
        </HeaderContentRight>
      </Header>

      {renderCallBox()}
    </Container>
  );
}
