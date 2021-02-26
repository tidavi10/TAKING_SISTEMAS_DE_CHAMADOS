import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaChamados from './pages/TelaChamados';
import ChamadosAdm from './pages/ChamadosAdm';
import ConsultaChamados from './pages/ConsultaChamados';
import EdicaoChamadosAdm from './pages/EdicaoChamadosAdm';
import LoginAdm from '../src/pages/LoginAdm';
import MenuAdm from '../src/pages/MenuAdm';
import Teste from '../src/pages/Teste';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path='/chamados' component={TelaChamados}/>
                <Route path='/chamados-adm' component={ChamadosAdm}/>
                <Route path='/consulta-chamados' component={ConsultaChamados}/>
                <Route path='/edicao-chamados-adm' component={EdicaoChamadosAdm}/>
                <Route path='/login-adm' component={LoginAdm}/>
                <Route path= '/menu-adm' component={Teste}/>
            </Switch>
        </BrowserRouter>
    )
}

