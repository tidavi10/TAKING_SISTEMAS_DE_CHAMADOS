import React from 'react';
import {
    BrowserRouter as Router} from 'react-router-dom';

import{
    Title,
    Container,
    Header,
    HeaderContent,
    HeaderButton,
    Par, 
    ControlList,
    Cod,
    Desc,
    Status

}from './style'
import { useHistory } from 'react-router-dom';


export default function ConsultaChamados() {
    const history = useHistory();

    const goToChamados = () => {
        history.push('/chamados')
    }
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <HeaderButton type="submit" onClick={goToChamados}>
                        <spam>Voltar</spam>
                    </HeaderButton>
                    <HeaderButton type="submit" onClick={goToChamados}> 
                        <spam>Abrir novo chamado</spam>
                    </HeaderButton>
                </HeaderContent>
                <spam>usuário logado</spam>
            </Header>
            <Par>
                Chamados em aberto
            </Par>
            <ControlList>
                    <Cod>
                        Cód.
                    </Cod>
                    <Desc>
                        Descrição
                    </Desc>
                    <Status>
                        Status
                    </Status>
            </ControlList>  
            <ControlList>
                <Cod>
                    
                    </Cod>
                <Desc>
                    
                    </Desc>
                <Status>
                    
                    </Status>
            </ControlList>
            <ControlList>
                <Cod>
                    
                    </Cod>
                <Desc>
                    
                    </Desc>
                <Status>
                    
                    </Status>
            </ControlList>
            <ControlList>
                <Cod>
                    
                    </Cod>
                <Desc>
                    
                    </Desc>
                <Status>
                    
                    </Status>
            </ControlList>  
            <ControlList>
                <Cod>
                    
                    </Cod>
                <Desc>
                    
                    </Desc>
                <Status>
                    
                    </Status>
            </ControlList>
        </Container>    
    )
}
