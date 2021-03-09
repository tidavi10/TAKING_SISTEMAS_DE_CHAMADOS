import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';

export class Social extends Component {

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profile);
        const token = response.tokenId;
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