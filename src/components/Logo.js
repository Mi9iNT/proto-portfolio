import React from 'react';

import Avatar from "../assets/img/LogoMobileBleu.svg";

const Logo = () => {
    return (
        <div className="logo-container">
            <a href='/'>
                <img src={Avatar} alt="Retourner à l'accueil" className="logo" title="Retourner à l'accueil" />
            </a>
            
        </div>
    );
};

export default Logo;