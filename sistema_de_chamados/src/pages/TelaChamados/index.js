import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Input, Title } from '../../styles/common-styles';
import {
    Header,
    Button,
    Form,
    Div,
} from '../TelaChamados/style';

export default function TelaChamados() {
    return (
        <Router>
            <Header>
                <Button>
                    Consultar chamado
                </Button>
            </Header>
            <Title>
                Descreva o problema
            </Title>
            <Form>
                <Div id="descricao">

                </Div>
            </Form>
            <Input type="file" />
            <Button>
                Finalizar chamado
            </Button>
        </Router>
    )
}
