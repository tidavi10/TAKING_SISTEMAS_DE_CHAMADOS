import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});


const AuthProvider =  ({ children }) => {
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

        const { token } = response.data;

        localStorage.setItem('@chamadosTaking:userAdmToken', token);

        setAuthData({ token });
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('@chamadosTaking:userAdmToken');

        setAuthData({});
    }, []);

    return (
        <AuthContext.Provider value={{ loginAdm, logout, token: authData.token }}>
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
