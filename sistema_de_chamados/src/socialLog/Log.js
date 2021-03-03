import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import socialMediaAuth from './service/auth';
import { googleProvider } from './config/authMethods'


export default Social = () => {
    const handleOnclick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };
    return (
        <div className="App">
            <button onClick={() => handleOnclick(googleProvider)}>Google</button>
        </div>
    );
}