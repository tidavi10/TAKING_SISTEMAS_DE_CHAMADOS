import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {
    Header,
    Title,
    Input,
    Button,
    Form,
    Div,
    FilterSelector,
} from '../TelaChamados/style';

export default function TelaChamados() {
    return (
        <Router>
            <Header>
                <Button>
                   <span>Consultar chamado</span>
                </Button>
            </Header>
            <Title>
                <span>Descreva o problema</span>
            </Title>
            <Form>
                <Div id="descricao">

                </Div>
            </Form>
            <FilterSelector>
                <span>Filtro de problema</span>
            </FilterSelector>
            <Input type="file" />
            <Button>
                <span>Finalizar chamado</span>
            </Button>
        </Router>
    )
}
