import React from 'react';
import {
   Container,
   Header,
   HeaderContent,
   ButtonHeader,
   Img, 
} from './styles';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export default function MenuAdm() {
    const history = useHistory();
    const { usuario } = useAuth();

    const gotoadm = () => {
        history.push('/chamados-adm')
    }
    return (
        <>
            <Container>
                <Header>
                    <HeaderContent>
                            <Img src={logo}></Img>
                            <ButtonHeader onClick={gotoadm}>
                                <p>Tela de Chamados</p>
                            </ButtonHeader>
                    </HeaderContent>
                    <p>{usuario.name ? usuario.name : usuario.email}</p>
                </Header>
                
            </Container>
        </>
    )
}


