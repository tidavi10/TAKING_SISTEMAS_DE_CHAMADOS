import React from 'react'
import GoogleLogin from 'react-google-login'

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

function Social() {

    const history = useHistory();

    const { loginUser } = useAuth();

    const responseGoogle = async (response) => {
        console.log(response)
        try {
            await loginUser({
                email: response.profileObj.email,
                nome: response.profileObj.name,
                tipoUsuario: 'LOGINSOCIAL'
            });
            history.push('/chamados')
        } catch (error) {
            alert('Não foi possível logar!')
        }        
    }

    // Ao commitar utilizar o clientId de Produção
    // Local -> clientId="499021820618-sq7nl7tub85p58odenrb44dl29tut6qo.apps.googleusercontent.com" 
    // Produção -> clientId="499021820618-c4dttfcpvpne9unmojlb6n3idbk3rr3l.apps.googleusercontent.com"
    //
    return (
        <div>
            <GoogleLogin
                clientId="499021820618-c4dttfcpvpne9unmojlb6n3idbk3rr3l.apps.googleusercontent.com" 
                buttonText="Sign in"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                //cookiePolicy={}
            />
        </div>
    )
}

export default Social