import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';

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
                        <p>Chamados</p>
                    </ButtonHeader>
                    <ButtonHeader>
                        <p>Meus dados</p>
                    </ButtonHeader>
                </HeaderContent>
                <p>Usuário Logado</p>
            </Header>

            <CallsBox>
                <LegendCalls>
                    <p>Cod.</p>
                    <p>Tipo</p>
                    <p>Status</p>
                    <InvisibleElement></InvisibleElement>
                </LegendCalls>

                <CallItem>
                    <CallCod>
                        <p>55</p>
                    </CallCod>
                    <CallType>
                        <p>Criação de e-mail</p>
                    </CallType>
                    <CallStatus>
                        <p>Pendente</p>
                    </CallStatus>
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>

                <CallItem>
                    <CallCod>
                        <p>55</p>
                    </CallCod>
                    <CallType>
                        <p>Criação de e-mail</p>
                    </CallType>
                    <CallStatus>
                        <p>Pendente</p>
                    </CallStatus>
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>

                <CallItem>
                    <CallCod>
                        <p>55</p>
                    </CallCod>
                    <CallType>
                        <p>Criação de e-mail</p>
                    </CallType>
                    <CallStatus>
                        <p>Pendente</p>
                    </CallStatus>
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>

                <CallItem>
                    <CallCod>
                        <p>55</p>
                    </CallCod>
                    <CallType>
                        <p>Criação de e-mail</p>
                    </CallType>
                    <CallStatus>
                        <p>Pendente</p>
                    </CallStatus>
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>

                <CallItem>
                    <CallCod>
                        <p>55</p>
                    </CallCod>
                    <CallType>
                        <p>Criação de e-mail</p>
                    </CallType>
                    <CallStatus>
                        <p>Pendente</p>
                    </CallStatus>
                    <CallEditButton onClick={goToEditCall}>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>
            </CallsBox>
        </Container>
    )
}