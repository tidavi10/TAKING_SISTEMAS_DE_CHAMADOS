import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaChamados from './pages/TelaChamados';
import PainelAdministrativo from './pages/PainelAdministrativo'
import ChamadosAdm from './pages/ChamadosAdm';
import ConsultaChamados from './pages/ConsultaChamados'
import ConsultaChamadosAdm from './pages/ConsultaChamadosAdm'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path='/chamados' component={TelaChamados}/>
                <Route path='/adm' component={PainelAdministrativo}/>
                <Route path='/chamados-adm' component={ChamadosAdm}/>
                <Route path='/consulta-chamados' component={ConsultaChamados}/>
                <Route path='/consulta-chamados-adm' component={ConsultaChamadosAdm}/>
            </Switch>
        </BrowserRouter>
    )
}

