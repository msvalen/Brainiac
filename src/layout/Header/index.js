import React from 'react';
import logo from '../../assets/download.svg'
import './style.css'

export default () => { 
    return (
        <header >
                <a className="logo" href='/' ><img src={logo} alt="Brainiac logo"/>
                <h1>Brainiac</h1></a>
        </header>
    );
}