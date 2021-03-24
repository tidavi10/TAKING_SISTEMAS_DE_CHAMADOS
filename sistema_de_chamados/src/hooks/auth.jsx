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

        setAuthData({ token, id, name, email, tipoUsuario });
    }, []);

    const loginAdm = useCallback(async({ email, senha, name }) => {
        const response = await getBaseAPI.post('admAuth', {
            email,
            senha, 
            name
        });

        const admEmail = JSON.parse(response.config.data).email

        const { usuario } = response.data; 
        
        console.log(response.data)

        localStorage.setItem('@chamadosTaking:usuario');

        setAuthData({ usuario });
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

    return (
        <AuthContext.Provider value={{
            loginUser,
            userLogout,
            loginAdm,
            usuario: {
                token: authData?.token,
                id: authData?.id,
                name: authData?.nome,
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