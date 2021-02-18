import React from 'react';
import {
    Container,
    Title,
    Form,
    Input,
    Button,
    Image,
    InputDiv
} from './styles';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';


export default function LoginAdm() {
    const history = useHistory();
    
    const gotoChamados = () => {
        history.push('/chamados-adm')
    }

    return (
        <>
            <Container>
                <Form>
                    <Title>Login</Title>
                    <InputDiv>
                        <label>E-mail:</label>
                        <Input type="email" name="email" />
                    </InputDiv>
                    <InputDiv>
                        <label>Senha:</label>
                        <Input type="password" name="password" id="password" />
                    </InputDiv>
                    <Button type="submit" onClick={gotoChamados}>Login</Button>
                    <Image src={logo} />
                </Form>
            </Container>
        </>
    )
}