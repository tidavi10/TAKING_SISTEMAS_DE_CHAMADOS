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
    EditionArea,
    InputArea,
    EditionStatus,
    EditionRunTime,
    DescriptionArea
} from './style';

export default function EdicaoChamadosAdm() {
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

            <EditionArea>
                <InputArea>
                    <EditionStatus>
                        <label for="status">Status:</label>
                        <select name="status" id="status">
                            <option value="Aberto">Aberto</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Pausado">Pausado</option>
                            <option value="Finalizado">Aberto</option>
                        </select>
                    </EditionStatus>

                    <EditionRunTime>
                        <label><small>Tempo gasto na execução:</small></label>
                        <div>
                            <span>2 horas e 37 minutos</span>
                        </div>
                    </EditionRunTime>
                </InputArea>
                <DescriptionArea>
                    <label>Descreva o problema:</label>
                    <textarea></textarea>
                </DescriptionArea>
            </EditionArea>
        </Container>
    )
}