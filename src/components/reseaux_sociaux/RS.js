import React from 'react';

import GitIco from '../../assets/fonts/fontawesome/Github-ico.svg';
import LinkedinIco from '../../assets/fonts/fontawesome/linkedin-ico.svg';

const RS = () => {
    return (
        <div className='FootLink'>
            <div className='FootCont'>
                <a href="https://github.com/Mi9iNT" target="_blank" rel="noopener noreferrer">
                    <img src={GitIco} className="FootIco" alt='Lien vers mon profil Github' title="Lien vers Github" />
                </a>
                <a href="https://www.linkedin.com/in/miguel-clairy-09809519b" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIco} className="FootIco" alt='Lien vers mon profil Linkedin' title="Lien vers Linkedin" />
                </a>
          
            </div>
        </div> 
    );
};

export default RS;