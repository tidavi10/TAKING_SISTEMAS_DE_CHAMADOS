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

import {PrivateRoute, PrivateRouteAdm} from './components/PrivRoute/PrivateRoutes'
import NotFound from './components/PrivRoute/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <PrivateRoute path='/chamados' component={TelaChamados}/>
                <PrivateRouteAdm path='/chamados-adm' component={ChamadosAdm}/>
                <PrivateRoute path='/consulta-chamados' component={ConsultaChamados}/>
                <PrivateRouteAdm path='/edicao-chamados-adm' component={EdicaoChamadosAdm}/>
                <Route path='/login-adm' component={LoginAdm}/>
                <PrivateRouteAdm path= '/menu-adm' component={MenuAdm}/>
                <PrivateRoute component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

