import React, { createContext, useCallback, useContext, useState } from "react";
import getBaseAPI, { getBaseAdmAPI } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [adminData, setAdminData] = useState(() => {
        const data = localStorage.getItem('@chamadosTaking:adminUser');
        if (data) {
            const parsedData = JSON.parse(data)
            return parsedData;
        }
    
        return {};
    });

    const loginUser = useCallback(async({ email, nome, senha, tipoUsuario }) => {
        const payload = { email, senha }
        const payloadSocial = { email, nome }

        let response = null

        switch(tipoUsuario) {
            case 'LOGINSOCIAL':
                response = await getBaseAPI().post('loginsocial/cadastrogmail', payloadSocial)
                console.log(response)
                break;
            default:
                response = await getBaseAPI().post('authenticate', payload)
        }       

        const userEmail = JSON.parse(response.config.data).email

        const token = response.data.token;
        const id = response.data.id;
        const name = response.data.nome;
        const data = JSON.stringify({ email, name, id, token, tipoUsuario });
        localStorage.setItem('@chamadosTaking:usuario', data);

        console.log(name);
        setAuthData({ token, id, name, email, tipoUsuario });
    }, []);

    const loginAdm = useCallback(async({email, senha}) => {
        const response = await getBaseAdmAPI().post('admAuth', { email, senha });

        const admEmail = JSON.parse(response.config.data).email
        const { id, nome, token } = response.data;
        const data = JSON.stringify({ admEmail, nome, id, token });

        localStorage.setItem('@chamadosTaking:adminUser', data);
        setAdminData({ admEmail, id, nome, token });
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
            loginAdm,
            usuario: {
                token: authData?.token,
                id: authData?.id,
                name: authData?.name,
                email: authData?.email,
            },
            admin: {
                token: adminData?.token,
                id: adminData?.id,
                name: adminData?.nome,
                email: adminData?.admEmail,
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