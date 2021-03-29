import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import {
    Container,
    Header,
    HeaderContentLeft,
    HeaderContentRight,
    Logout,
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

import {FiLogOut} from 'react-icons/fi';

import logo from '../../assets/logo.png'
import { getBaseAdmAPI } from '../../services/api';

export default function EdicaoChamadosAdm(props) {
    const history = useHistory();
    const [callItem, setCallItem] = useState({});
    const [loading, setLoading] = useState(false);
    const { admin } = useAuth();
    const { addToast } = useToast();

    const callId = localStorage.getItem('@chamadosTaking:idChamado');
    
    const goToChamadosAdm = () => {
        history.push('/chamados-adm')
    }

    useEffect(async() => {
        setLoading(true);

        const response = await getBaseAdmAPI().get(`/chamados/adm/${callId}`);
        setCallItem(response.data);
        
        setLoading(false);
    }, []);

    console.log(callItem);

    const handleChangeDescription = (e) => {
        setCallItem({...callItem, descricao: e.target.value});;
    }

    const handleChangeStatus = (e) => {
        setCallItem({...callItem, status: e.target.value});;
    }

    const handleChangeRunTime = (e) => {
        setCallItem({...callItem, tempoGasto: e.target.value});
    }

    const submitResponse = async(data) => {
        try {
            await getBaseAdmAPI().put(`/resolucao/resposta/${callId}`, {
                status: callItem?.status,
                tempoGasto: callItem?.tempoGasto,
                descricao: callItem?.descricao,
            }); 

            await addToast({
                type: 'success',
                title: 'Chamado atualizado com sucesso!',
            });

            history.push('/chamados-adm');
        } catch (erro) {
            await addToast({
                type: 'error',
                title: 'Não foi possível realizar essa operação.',
                description: 'Por favor tente novamente mais tarde.'
            });
        }
    };

    const handleAdmLogout = async() => {
        localStorage.removeItem('@chamadosTaking:adminUser');

        history.push('/login-adm');
    }

    return (
        <Container>
            <Header>
            <HeaderContentLeft>
                <Img src={logo}></Img>
                <ButtonHeader onClick={goToChamadosAdm}>
                    <p>Tela de Chamados</p>
                </ButtonHeader>
            </HeaderContentLeft>
            <HeaderContentRight>
                <p>{admin.name ? admin.name : admin.email}</p>
                <Logout onClick={handleAdmLogout}>
                    <FiLogOut color="#ffecd1" />
                </Logout>
            </HeaderContentRight>
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
                        <p>{callItem.tipoProblema}</p>
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
                            <option value="Pendente">Pendente</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                    </EditionStatus>

                    <EditionRunTime>
                        <label>Tempo gasto na execução:</label>
                        <input type="text" value={callItem.tempoGasto} onChange={handleChangeRunTime} />
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
                    <SubmitButton onClick={submitResponse}>
                        <p>Atualizar</p>
                    </SubmitButton>
                    <SubmitButton onClick={goToChamadosAdm}>
                        <p>Cancelar</p>
                    </SubmitButton>
            </ButtonArea>
        </Container>
    )
}