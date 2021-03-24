import React, { createContext, useCallback, useContext, useState } from "react";
import getBaseAPI from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const loginUser = useCallback(async({ email, senha, tipoUsuario }) => {
        const payload = { email, senha}

        const response = tipoUsuario === 'ADMIN' ? await getBaseAPI().post('admAuth', payload) : await getBaseAPI().post('authenticate', payload);

        const userEmail = JSON.parse(response.config.data).email

        const token = response.data.token;
        const id = response.data.id;
        const name = response.data.nome;
        const data = JSON.stringify({ email, name, id, token, tipoUsuario });
        localStorage.setItem('@chamadosTaking:usuario', data);

        console.log(name);
        setAuthData({ token, id, name, email, tipoUsuario });
    }, []);
    


    const userLogout = useCallback(() => {
        localStorage.setItem('@chamadosTaking:usuario');

        setAuthData({});
    }, []);


    const [authData, setAuthData] = useState(() => {
    const data = localStorage.getItem('@chamadosTaking:usuario');
    if (data) {
        const parsedData = JSON.parse(data)
        return parsedData;
    }

    return {};
});
console.log(authData.name);

    return (
        <AuthContext.Provider value={{
            loginUser,
            userLogout,
            usuario: {
                token: authData?.token,
                id: authData?.id,
                name: authData?.name,
                email: authData?.email,
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const contex = useContext(AuthContext);

    if (!contex) {
        throw new Error('useAuth deve ser utilizado com um AuthProvider');
    }

    return contex
}

export { AuthProvider, useAuth, AuthContext };