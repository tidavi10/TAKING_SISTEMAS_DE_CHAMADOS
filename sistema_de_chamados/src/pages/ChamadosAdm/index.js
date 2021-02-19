import React from 'react';

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
                    <CallEditButton>
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
                    <CallEditButton>
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
                    <CallEditButton>
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
                    <CallEditButton>
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
                    <CallEditButton>
                        <FiEdit />
                    </CallEditButton>
                </CallItem>
            </CallsBox>
        </Container>
    )
}