import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export class Social extends Component {

    responseGoogle = (response) => {
        const token = response.tokenId
        const {email, name} = response.profileObj
        const form = {email, name}
        api.post('loginsocial/cadastrogmail', form)
        localStorage.setItem("Token:id", token)
    }
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="499021820618-sq7nl7tub85p58odenrb44dl29tut6qo.apps.googleusercontent.com"
                    buttonText="Sign in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Social