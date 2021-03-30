import React from 'react'

import { Redirect, Route } from 'react-router'

const PrivateRoute = props => {
    const islogged = !!localStorage.getItem('@chamadosTaking:usuario') ||  !!localStorage.getItem('@chamadosTaking:usuarioSocial')
    return islogged ? <Route {...props} /> : <Redirect to="/" />
}

const PrivateRouteAdm = props => {
    const adminData = !!localStorage.getItem('@chamadosTaking:adminUser');

    return adminData ? <Route {...props} /> : <Redirect to="/login-adm" />
}

export {PrivateRoute, PrivateRouteAdm}