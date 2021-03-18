import React from 'react'

import { Redirect, Route } from 'react-router'

const PrivateRoute = props => {
    const islogged = !!localStorage.getItem('@chamadosTaking:usuario')
    return islogged ? <Route {...props} /> : <Redirect to="/" />
}

const PrivateRouteAdm = props => {
    const islogged = !!localStorage.getItem('@chamadosTaking:userAdmToken')
    return islogged ? <Route {...props} /> : <Redirect to="/login-adm" />
}

export {PrivateRoute, PrivateRouteAdm}