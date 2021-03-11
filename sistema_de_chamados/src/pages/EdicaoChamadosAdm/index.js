import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Header,
    HeaderContent,
    Img,
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

import logo from '../../assets/logo.png'

export default function EdicaoChamadosAdm() {
    const history = useHistory();
    const goToChamadosAdm = () => {
        history.push('/chamados-adm')
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Img src={logo}></Img>
                    <ButtonHeader onClick={goToChamadosAdm}>
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
                </CallItem>
            </CallsBox>

            <EditionArea>
                <InputArea>
                    <EditionStatus>
                        <label htmlFor="status">Status:</label>
                        <select name="status" id="status">
                            <option value="Aberto">Aberto</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Pausado">Pausado</option>
                            <option value="Finalizado">Aberto</option>
                        </select>
                    </EditionStatus>

                    <EditionRunTime>
                        <label>Tempo gasto na execução:</label>
                        <input type="text" />
                    </EditionRunTime>
                </InputArea>
                <DescriptionArea>
                    <label>Descreva o problema:</label>
                    <textarea></textarea>
                </DescriptionArea>
            </EditionArea>

            <ButtonArea>
                <>
                    <SubmitButton>
                        <p>Cancelar</p>
                    </SubmitButton>
                    <SubmitButton>
                        <p>Atualizar</p>
                    </SubmitButton>
                </>
            </ButtonArea>
        </Container>
    )
}