import React, { createContext, useCallback, useContext, useState } from 'react';
import getBaseAPI from '../services/api';

const AuthContext = createContext({});

const AuthProvider =  ({ children }) => {
    //Vanessa
    const [userAuthData, setUserAuthData] = useState(() => {
        const data = localStorage.getItem('@chamadosTaking:usuario');
        if (data) {
            const parsedData = JSON.parse(data)
            //console.log(parsedData)
            return parsedData;
        }

        return {};
    });
    
    /**
     * { email, senha, tipo }
     * tipo =  ADMIN, USUARIO
     */
    const loginUser = useCallback(async({ email, senha, tipoUsuario }) => {

        const payload = { email, senha }

        const response = tipoUsuario === 'ADMIN'
            ?  await  getBaseAPI().post('admAuth', payload) 
            : await  getBaseAPI().post('authenticate', payload);

        const usuarioEmail = JSON.parse(response.config.data).email

        const userToken = response.data.token;
        const userId = response.data.id;
        const nameUsuario = response.data.nome;
        const data = JSON.stringify({
            email:usuarioEmail,
            nome: nameUsuario,
            userId,
            token: userToken,
            tipoUsuario
        })
        localStorage.setItem('@chamadosTaking:usuario', data);

        setUserAuthData({ userToken,userId, nameUsuario, usuarioEmail, tipoUsuario });
    }, []);

    const userLogout = useCallback(() => {
        localStorage.setItem('@chamadosTaking:usuario');

        setUserAuthData({});
    }, []);
    
   
    return (
        <AuthContext.Provider value={{
            loginUser,
            userLogout,
            usuario: {
                userToken: userAuthData?.userToken,
                userId: userAuthData?.userId,
                nameUsuario: userAuthData?.nameUsuario,
                usuarioEmail: userAuthData?.usuarioEmail,
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser utilizado com um AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth, AuthContext };
