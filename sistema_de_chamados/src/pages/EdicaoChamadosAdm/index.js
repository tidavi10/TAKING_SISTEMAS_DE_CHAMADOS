import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    DescriptionArea,
    ButtonArea,
    SubmitButton
} from './style';

export default function EdicaoChamadosAdm() {
    const history = useHistory();
    const goToChamadosAdm = () => {
        history.push('/chamados-adm')
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <ButtonHeader onClick={goToChamadosAdm}>
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
                        <label>Tempo gasto na execução:</label>
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

            <ButtonArea>
                <SubmitButton>
                    <span>Cancelar</span>
                </SubmitButton>
                <SubmitButton>
                <span>Atualizar</span>
                </SubmitButton>
            </ButtonArea>
        </Container>
    )
}