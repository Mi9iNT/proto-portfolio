import React from 'react';
import { NavLink } from 'react-router-dom';

import House from '../../assets/fonts/fontawesome/house-solid-blanc.svg';
import ContactMe from '../../assets/fonts/fontawesome/envelope-solid-blanc.svg';
import MyCV from '../../assets/fonts/fontawesome/address-card-solid-blanc.svg';
import Toggle from './components-menu/Toggle';

const Menu = () => {
  return (
      <div><div className="MenuBottom" id="menuBottom">
      <ul className='dispoMenuBottom'>
        
          <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>
              <img className='icoMenuBottom' src={House} alt="Accueil" title="Acceuil" id="Accueil" />
            </li>
        </NavLink>
        
          <NavLink to="/curriculum-vitae" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>
              <img className='icoMenuBottom' src={MyCV} alt="Mon CV" title="Curriculum-Vitae" id="monCv" />
            </li>
          </NavLink>
          
          <NavLink to="/contact" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>
              <img className='icoMenuBottom' src={ContactMe} alt="Me Contacter" title="Contact" id="meContacter" />
            </li>
          </NavLink>
      </ul>
      <div className='menu-circle-bg' />
        <div className='container-corner'>
          <div className="btn-cricle">
            <Toggle />
          </div>
      </div>
           
    </div>
      
    </div>
      
      
  );
};

export default Menu;