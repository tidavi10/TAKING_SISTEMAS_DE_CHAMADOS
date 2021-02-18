import React from 'react';
import {
    BrowserRouter as Router } from 'react-router-dom';
import {
    Container,
    Form,
    Title,
    Input,
    Button,
    Image,
    InputDiv
} from '../../styles/common-styles';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';

export default function Cadastro() {
    const history = useHistory();

    const goToChamados = () => {
        history.push('/chamados')
    }
    return (
        <Router>
            <Container>
                <Form>
                    <Title>Cadastro</Title>
                    <InputDiv>
                       <label>Nome:</label>
                       <Input type="text" name="nome"/>
                    </InputDiv> 
                    <InputDiv>
                        <label>E-mail:</label>
                        <Input type="email" name="email"/>
                    </InputDiv> 
                    <InputDiv> 
                        <label>CPF:</label>  
                        <Input type="text" name="cpf"/>
                    </InputDiv>
                    <InputDiv>
                        <label>RG:</label>
                        <Input type="text" name="rg"/>
                    </InputDiv>
                    <InputDiv>
                        <label>CEP:</label>
                        <Input type="text" name="cep"/>
                    </InputDiv>
                    <InputDiv>
                        <label>Endereço:</label>
                        <Input type="text" name="endereco"/>
                    </InputDiv>
                    <InputDiv>
                        <label>Cargo:</label>
                        <Input type="text" name="cargo"/>
                    </InputDiv>
                    <InputDiv>
                        <label>Senha:</label>
                        <Input type="password" nome="senha"/>
                    </InputDiv>
                    <Button type="submit" onClick={goToChamados}>Cadastrar</Button>
                    <Image src={logo} />
                </Form>
            </Container>
        </Router>
    )
}

