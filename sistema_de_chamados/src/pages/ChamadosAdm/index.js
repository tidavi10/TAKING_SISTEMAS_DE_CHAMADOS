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
                    <div>Cod.</div>
                    <div>Tipo</div>
                    <div>Status</div>
                    <InvisibleElement></InvisibleElement>
                </LegendCalls>

                <CallItem>
                    <CallCod>
                        <div>55</div>
                    </CallCod>
                    <CallType>
                        <div>Criação de e-mail</div>
                    </CallType>
                    <CallStatus>
                        <div>Pendente</div>
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