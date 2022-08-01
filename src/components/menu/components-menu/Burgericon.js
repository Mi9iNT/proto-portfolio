import React from "react";
import X from '../../../assets/fonts/fontawesome/+-solid-blanc.svg';

export default ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    {/* <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" /> */}
        <img className='links-circle' src={X} alt='Voir plus' title='Voir plus' id='voirPlus' />
  </div>
);