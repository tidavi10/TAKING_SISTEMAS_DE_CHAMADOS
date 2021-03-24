import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { useHistory } from 'react-router-dom';
import {LoginSocial} from '../../services/api'

export class Social extends Component {

    responseGoogle = async(response) => {
            const token = response.tokenId
            const  {name} = response.profileObj
            const {email} = response.Qs.zt
            const form = {email, nome: name}
            console.log(response.Qs.zt)
            await LoginSocial(form)
            localStorage.setItem("@chamadosTaking:usuario", token)
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

/*import {LoginSocial} from '../../services/api'

export class Social extends Component {

    responseGoogle = async (response) => {
        const token = response.tokenId
        console.log(response)
        const {email, name} = response.profileObj
        const form = {email, nome: name}
        await LoginSocial(form)
        localStorage.setItem("Token:id", token)*/

export default Social