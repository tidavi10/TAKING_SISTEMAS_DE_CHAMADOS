import React from 'react';
import {
   Container,
   Header,
   HeaderContentLeft,
   HeaderContentRight,
   ButtonHeader,
   Img, 
   Logout
} from './styles';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

import {FiLogOut} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

export default function MenuAdm() {
    const history = useHistory();
    const { admin } = useAuth();

    const goToChamadosAdm = () => {
        history.push('/chamados-adm')
    }

    const handleAdmLogout = async() => {
        localStorage.removeItem('@chamadosTaking:adminUser');

        history.push('/login-adm');
    }

    return (
        <>
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
                
            </Container>
        </>
    )
}


