import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});



const AuthProvider =  ({ children }) => {
    const [userEmail, setUserEmail] = useState(() => {
        const admEmail = localStorage.getItem('@chamadosTaking:userAdmEmail');

        if (admEmail) {
            return { admEmail };
        }

        return {};
    });

    const [userName, setUserName] = useState(() => {
        const nome = localStorage.getItem('@chamadosTaking:userAdmName');

        if (nome) {
            return { nome };
        }

        return {};
    });

    const [userId, setUserId] = useState(() => {
        const id = localStorage.getItem('@chamadosTaking:userAdmId');

        if (id) {
            return { id };
        }

        return {};
    });

    //Vanessa
    const [userAuthData, setUserAuthData] = useState(() => {
        const data = localStorage.getItem('@chamadosTaking:usuario');
        if (data) {
            const parsedData = JSON.parse(data)
            console.log(parsedData)
            return parsedData;
        }

        return {};
    });

    const [authData, setAuthData] = useState(() => {
        const token = localStorage.getItem('@chamadosTaking:userAdmToken');

        if (token) {
            return { token };
        }

        return {};
    });

    //Vanessa
    const loginUser = useCallback(async({ email, senha }) => {
        const response = await api().post('authenticate', {
            email,
            senha
        });

        const usuarioEmail = JSON.parse(response.config.data).email

        const userToken = response.data.token;
        const userId = response.data.id;
        const nameUsuario = response.data.nome;
        const data = JSON.stringify({email:usuarioEmail, nome: nameUsuario, userId,token: userToken })
        localStorage.setItem('@chamadosTaking:usuario', data);

        setUserAuthData({ userToken,userId, nameUsuario, usuarioEmail  });
    }, []);

    const userLogout = useCallback(() => {
        localStorage.setItem('@chamadosTaking:usuario');

        setUserAuthData({});
    }, []);
    
    const loginAdm = useCallback(async({ email, senha }) => {
        const response = await api.post('admAuth', {
            email,
            senha
        });

        console.log(response.data)
        const convertDataEmail = JSON.parse(response.config.data).email

        const { token, id, nome } = response.data;
        const admEmail = convertDataEmail;        

        localStorage.setItem('@chamadosTaking:userAdmToken', token);
        localStorage.setItem('@chamadosTaking:userAdmId', id);
        localStorage.setItem('@chamadosTaking:userAdmName', nome);
        localStorage.setItem('@chamadosTaking:userAdmEmail', admEmail);

        setAuthData({ token });
        setUserId({ id });
        setUserName({ nome });
        setUserEmail({ admEmail });
    }, []);

    console.log(userName.nome)

    const logout = useCallback(() => {
        localStorage.removeItem('@chamadosTaking:userAdmToken');
        localStorage.removeItem('@chamadosTaking:userAdmId');
        localStorage.removeItem('@chamadosTaking:userAdmName');
        localStorage.removeItem('@chamadosTaking:userAdmEmail');

        setAuthData({});
    }, []);

    return (
        <AuthContext.Provider value={{
            loginAdm,
            logout,
            token: authData.token,
            id: userId.id,
            name: userName?.nome,
            admEmail: userEmail?.admEmail,
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
