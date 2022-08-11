import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from "../assets/img/LogoMobileBleuv2.svg";

const Logo = () => {
    return (
        <div className="logo-container">
            <NavLink to='/'>
                <img src={Avatar} alt="Retourner à l'accueil" className="logo" title="Retourner à l'accueil" />
            </NavLink>
            
        </div>
    );
};

export default Logo;