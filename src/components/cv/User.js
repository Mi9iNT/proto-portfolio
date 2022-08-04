import React from 'react';
import { NavLink } from 'react-router-dom';

import CV from '../../download/cv-Clairy_Miguel-Dev_Front_Qr.pdf';

import AvatarBlanc from '../../assets/img/AvatarCropped.png';
import Address from '../../assets/fonts/fontawesome/house-solid.svg';
import AddressBlanc from '../../assets/fonts/fontawesome/house-solid-blanc.svg';
import Phone from '../../assets/fonts/fontawesome/phone-solid.svg';
import PhoneBlanc from '../../assets/fonts/fontawesome/phone-solid-blanc.svg';
import Mail from '../../assets/fonts/fontawesome/envelope-solid.svg';
import MailBlanc from '../../assets/fonts/fontawesome/envelope-solid-blanc.svg';
import Retour from '../../assets/fonts/fontawesome/left-long-solid.svg';
import DonwLoader from '../../assets/fonts/fontawesome/donwload-solid.svg';

const User = () => {
    return (
        <div className='user'>
            <NavLink to="/" title="Retourner à l'accueil">
                <img src={AvatarBlanc} alt='Avatar de Miguel' className='Avatar' />
                <img src={AvatarBlanc} alt='Avatar de Miguel' className='AvatarBlanc' />
            </NavLink>
            
                <NavLink to="/">
                    <img src={Retour} className='btnBack' alt="Retourner à l'accueil" title="Retourner à l'accueil" />
                </NavLink>
               <a href={CV} download="">
                    <img src={DonwLoader} className='btnDonwlad' alt="Téléchargement" title='Télécharger le CV' />
                </a>
            <div className="identity">
                <h1 className="user-name">CLAIRY Miguel</h1>
                <h2 className="user-profession">Développeur Front-End</h2>
            </div>
            
            <div className="user-infos">

                <table className="user-info">
                    <tbody>
                        <tr>
                            <td className='td-gauche'>
                                <a href='https://goo.gl/maps/2dB5Ci7raxW4mdwj7' target="_blank" rel="noopener noreferrer">
                                    <img src={Address} alt='Adresse de Miguel' className='Adresse' />
                                    <img src={AddressBlanc} alt='Adresse de Miguel' className='AdresseBlanc' />   
                                </a>
                               
                            </td>
                            <td className='td-droite'>
                                <a href='https://goo.gl/maps/2dB5Ci7raxW4mdwj7' target="_blank" rel="noopener noreferrer">
                                    <address className="user-info">
                                        : 14, rue du Try 95160 Montmorency
                                    </address>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td-gauche'>
                                <a href="tel:+33768437621">
                                    <img src={Phone} alt='Numéro téléphone de Miguel' className='Telephone' />
                                    <img src={PhoneBlanc} alt='Numéro téléphone de Miguel' className='TelephoneBlanc' />  
                                </a>  
                            </td>
                            <td className='td-droite'>
                               <a href="tel:+33768437621">: 07.68.43.76.21</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td-gauche'>
                                <a href="/Contact">
                                    <img src={Mail} alt='Adresse emeil de Miguel' className='AdresseMail' />
                                    <img src={MailBlanc} alt='Adresse emeil de Miguel' className='AdresseMailBlanc' />
                                </a>
                                
                            </td>
                            <td className='td-droite'>
                               <NavLink to="/Contact">: miguel.clairy@gmail.com</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;