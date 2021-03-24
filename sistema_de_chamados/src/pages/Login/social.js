import React from 'react'
import GoogleLogin from 'react-google-login'

import { useHistory } from 'react-router-dom';
import {LoginSocial} from '../../services/api'

function Social() {

    const history = useHistory();

    const responseGoogle = async (response) => {
        const token = response.tokenId
        console.log(response)
        const {name, email} = response.profileObj
        //teste
        const form = {email, nome: name}
        await LoginSocial(form)
        localStorage.setItem("@chamadosTaking:usuarioSocial", token)
        history.push('/chamados')
    }

    // Ao commitar utilizar o clientId de Produção
    // Local -> clientId="499021820618-sq7nl7tub85p58odenrb44dl29tut6qo.apps.googleusercontent.com" 
    // Produção -> clientId="499021820618-fvfuf4pb2ebqdvr7k7uudan2js7rsj48.apps.googleusercontent.com"

        return (
            <div>
                <GoogleLogin
                    clientId="499021820618-fvfuf4pb2ebqdvr7k7uudan2js7rsj48.apps.googleusercontent.com" 
                    buttonText="Sign in"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }

export default Social