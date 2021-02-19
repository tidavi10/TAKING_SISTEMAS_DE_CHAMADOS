import React from 'react';
import { useHistory } from 'react-router-dom';

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
    InvisibleElement
} from './style';

export default function ChamadosAdm() {
    const history = useHistory();

    const goToEditCall = () => {
        history.push('/edicao-chamados-adm')
    }
    
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <ButtonHeader>
                        <span>Chamados</span>
                    </ButtonHeader>
                    <ButtonHeader>
                        <span>Meus dados</span>
                    </ButtonHeader>
                </HeaderContent>
                <span>Usuário Logado</span>
            </Header>

            <CallsBox>
                <LegendCalls>
                    <span>Cod.</span>
                    <span>Tipo</span>
                    <span>Status</span>
                    <InvisibleElement></InvisibleElement>
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
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
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
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
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
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
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
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
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
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>
            </CallsBox>
        </Container>
    )
}