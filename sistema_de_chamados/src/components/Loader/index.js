import React from 'react';

import './spinner.css';

import { LoaderContainer } from './styles';

function Loader () {
    return(
        <LoaderContainer>
           <div className="ml-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>            
        </LoaderContainer>
    )
}

export { Loader }