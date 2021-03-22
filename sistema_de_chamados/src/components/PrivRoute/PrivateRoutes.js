import React from 'react'

import { Redirect, Route } from 'react-router'

const PrivateRoute = props => {
    const islogged = !!localStorage.getItem('@chamadosTaking:usuario')
    return islogged ? <Route {...props} /> : <Redirect to="/" />
}

const PrivateRouteAdm = props => {
    const usuarioData = localStorage.getItem('@chamadosTaking:usuario')
    const usuario = JSON.parse(usuarioData)
    if (usuario === null) {
        return <Redirect to="/login-adm" />
    }
    return usuario.tipoUsuario === 'ADMIN' ? <Route {...props} /> : <Redirect to="/login-adm" />
}

export {PrivateRoute, PrivateRouteAdm}