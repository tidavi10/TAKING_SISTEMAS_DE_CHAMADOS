import React from 'react';

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
    CallEditButton
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
                </LegendCalls>

                <CallItem>
                    <CallCod>55</CallCod>
                    <CallType>Criação de e-mail</CallType>
                    <CallStatus>Pendente</CallStatus>
                    <CallEditButton></CallEditButton>
                </CallItem>
            </CallsBox>
        </Container>
    )
}