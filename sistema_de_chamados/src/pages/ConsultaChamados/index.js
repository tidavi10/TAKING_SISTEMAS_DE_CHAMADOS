import React from 'react';
import {
    BrowserRouter as Router} from 'react-router-dom';
import { FiEdit } from 'react-icons/fi'

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
    CallEditButton,
    Title
} from './style';
import { useHistory } from 'react-router-dom';

export default function ChamadosAdm() {
    const history = useHistory();

    const goToChamados = () => {
        history.push('/chamados')
    }
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <ButtonHeader type="submit" onClick={goToChamados}>
                        <span>Voltar</span>
                    </ButtonHeader>
                    <ButtonHeader type="submit" onClick={goToChamados}>
                        <span>Abrir novo chamado</span>
                    </ButtonHeader>
                </HeaderContent>
                <span>Usuário Logado</span>
            </Header>
            <Title>Chamados em aberto</Title>
            <CallsBox>
                <LegendCalls>
                    <span>Cod.</span>
                    <span>Descrição</span>
                    <span>Status</span>
                </LegendCalls>
                <CallItem>
                    <CallCod>
                        <span>55</span>
                    </CallCod>
                    <CallType>
                        <span>Criação de e-mail</span>
                    </CallType>
                    <CallStatus>
                        <span>Pendente</span>
                    </CallStatus>
                </CallItem>
                <CallItem>
                    <CallCod>
                        <span>55</span>
                    </CallCod>
                    <CallType>
                        <span>Criação de e-mail</span>
                    </CallType>
                    <CallStatus>
                        <span>Pendente</span>
                    </CallStatus>
                </CallItem>
                <CallItem>
                    <CallCod>
                        <span>55</span>
                    </CallCod>
                    <CallType>
                        <span>Criação de e-mail</span>
                    </CallType>
                    <CallStatus>
                        <span>Pendente</span>
                    </CallStatus>
                </CallItem>
                <CallItem>
                    <CallCod>
                        <span>55</span>
                    </CallCod>
                    <CallType>
                        <span>Criação de e-mail</span>
                    </CallType>
                    <CallStatus>
                        <span>Pendente</span>
                    </CallStatus>
                </CallItem>
                <CallItem>
                    <CallCod>
                        <span>55</span>
                    </CallCod>
                    <CallType>
                        <span>Criação de e-mail</span>
                    </CallType>
                    <CallStatus>
                        <span>Pendente</span>
                    </CallStatus>
                </CallItem>
            </CallsBox>
        </Container>
    )
}
