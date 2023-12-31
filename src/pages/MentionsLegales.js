import React from 'react';
import Logo from '../components/Logo';

import { motion } from "framer-motion";

const MentionsLegales = () => {
    return (
        <motion.div
        
            initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
            
        >
            <Logo />
            <h2>Mentions légales</h2>
            <div className="ContentMentions">
                <p>En vigueur au 01/08/2022</p>
            <br />
            <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'<b>"Utilisateur"</b>, du site https://mi9int.github.io/proto-portfolio , les présentes mentions légales.</p>
            <br />
            <p>La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.</p>
            <br />
            <p>Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
            <br />
            <h3>ARTICLE 1 - L'EDITEUR</h3>
            <br />
            <p>L’édition et la direction de la publication du Site est assurée par Clairy Miguel, domiciliée à <b>Montmorency 95160</b> et l'adresse e-mail <b>miguel.clairy@gmail.com</b>.</p>
            <br />
            <h3>ARTICLE 2 - L'HEBERGEUR</h3>
            <br />
            <p>L'hébergeur du Site est la société Github</p>
            <br />
            <h3>ARTICLE 3 - ACCES AU SITE</h3>
            <br />
            <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
            <br />
            <p>En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
            <br />
            <h3>ARTICLE 4 - COLLECTE DES DONNEES</h3>
            <br />
            <p>Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p>
            <br />
            <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit : via un formulaire de contact</p>
            <br />
            <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site﻿, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
            <br />
            <br />
            <p>&copy; 2022 Clairy Miguel</p>    
            </div>
        </motion.div>
    );
};

export default MentionsLegales;