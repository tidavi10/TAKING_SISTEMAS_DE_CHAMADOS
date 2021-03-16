import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

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
        const name = localStorage.getItem('@chamadosTaking:userAdmName');

        if (name) {
            return { name };
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

    const [authData, setAuthData] = useState(() => {
        const token = localStorage.getItem('@chamadosTaking:userAdmToken');

        if (token) {
            return { token };
        }

        return {};
    });

    const loginAdm = useCallback(async({ email, senha }) => {
        const response = await api.post('admAuth', {
            email,
            senha
        });

        const convertDataEmail = JSON.parse(response.config.data).email

        const { token } = response.data;
        const { id } = response.data;
        const { name } = response.data;
        const admEmail = convertDataEmail;        

        localStorage.setItem('@chamadosTaking:userAdmToken', token);
        localStorage.setItem('@chamadosTaking:userAdmId', id);
        localStorage.setItem('@chamadosTaking:userAdmName', name);
        localStorage.setItem('@chamadosTaking:userAdmEmail', admEmail);

        setAuthData({ token });
        setUserId({ id });
        setUserName({ name });
        setUserEmail({ admEmail });
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('@chamadosTaking:userAdmToken');
        localStorage.removeItem('@chamadosTaking:userAdmId');
        localStorage.removeItem('@chamadosTaking:userAdmName');
        localStorage.removeItem('@chamadosTaking:userAdmEmail');

        setAuthData({});
    }, []);

    const updateCall = useCallback(({ }) => {}, []);

    return (
        <AuthContext.Provider value={{
            loginAdm,
            logout,
            token: authData.token,
            id: userId.id,
            name: userName?.name,
            admEmail: userEmail?.admEmail
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

export { AuthProvider, useAuth };
