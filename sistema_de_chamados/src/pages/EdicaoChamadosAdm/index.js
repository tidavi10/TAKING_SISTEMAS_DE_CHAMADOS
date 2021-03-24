import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

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
import getBaseAPI from '../../services/api';

export default function EdicaoChamadosAdm() {
    const history = useHistory();
    const [callItem, setCallItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [runTime, setRunTime] = useState('');

    const { usuario } = useAuth();
    const { addToast } = useToast();
    console.log(usuario)

    

    const callId = localStorage.getItem('@chamadosTaking:idChamado');
    
    const goToChamadosAdm = () => {
        history.push('/chamados-adm')
    }

    useEffect(async() => {
        setLoading(true);

        const response = await getBaseAPI().get(`/chamados/${callId}`);
        
        setCallItem(response.data[0]);
        setLoading(false);
    }, []);

    const handleChangeDescription = (e) => {
        setCallItem({...callItem, descricao: e.target.value});;
    }

    const handleChangeStatus = (e) => {
        setCallItem({...callItem, status: e.target.value});;
    }

    const handleChangeRunTime = (e) => {
        setRunTime(e.target.value);
    }

    const submitResponse = async(data) => {
        try {
        const response = await getBaseAPI().post(`resolucao/resposta/${callId}`, {
            status: callItem.status,
            tempoGasto: runTime,
            descricao: callItem.descricao,
        }); 

        addToast({
            type: 'success',
            title: 'Resposta enviada com sucesso!',
        });
        } catch (erro) {
            addToast({
                type: 'error',
                title: 'Não foi possível realizar essa operação. Por favor tente mais tarde.'
            });
        }
    };

    // const cancelUpdate = () => {
    //     // Limpa os campos
    //     // Redireciona para lista de chamados
    // }

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
                <p>{!name || name != undefined ? admEmail : name}</p>
            </Header>

            <CallsBox>
                <LegendCalls>
                    <p>Cod.</p>
                    <p>Tipo</p>
                    <p>Status</p>
                </LegendCalls>

                <CallItem>
                    <CallCod>
                        <p>{callItem.id}</p>
                    </CallCod>
                    <CallType>
                        <p>{callItem?.problema?.tipoDoProblema}</p>
                    </CallType>
                    <CallStatus>
                        <p>{callItem.status}</p>
                    </CallStatus>
                </CallItem>
            </CallsBox>

            <EditionArea>
                <InputArea>
                    <EditionStatus>
                        <label htmlFor="status">Status:</label>
                        <select value={callItem.status} onChange={handleChangeStatus} name="status" id="status">
                            <option value="Aberto">Aberto</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Pausado">Pausado</option>
                            <option value="Finalizado">Aberto</option>
                        </select>
                    </EditionStatus>

                    <EditionRunTime>
                        <label>Tempo gasto na execução:</label>
                        <input type="text" value={runTime} onChange={handleChangeRunTime} />
                    </EditionRunTime>
                </InputArea>
                <DescriptionArea>
                    <label>Descrição do problema/ Obs.:</label>
                    <div>
                        <textarea value={callItem.descricao} onChange={handleChangeDescription}/>
                    </div>
                </DescriptionArea>
            </EditionArea>

            <ButtonArea>
                <>
                    <SubmitButton onClick={() => {}}>
                        <p>Cancelar</p>
                    </SubmitButton>
                    <SubmitButton onClick={submitResponse}>
                        <p>Atualizar</p>
                    </SubmitButton>
                </>
            </ButtonArea>
        </Container>
    )
}