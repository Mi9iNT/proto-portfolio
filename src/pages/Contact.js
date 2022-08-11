import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../components/Logo';
import Menu from '../components/menu/Menu';

import { motion } from "framer-motion";
import RS from '../components/reseaux_sociaux/RS';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ngzrlk', 'template_0o78u8q', form.current, 'k1bVD5MBSy6iOjsq3')
            .then((result) => {
            console.log(result.text);
            console.log("message envoyé");
                alert("message envoyé");
                e.preventDefault();
                e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
        
      
  };


    return (
        
        <motion.div
            initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
        >
            <Logo />
            <Menu />
            <RS />
            <h2 className="ContactTitle">Contact</h2>
            <p className='Pcontact'>Pour me contacter veuillez renseigner et envoyer ce formulaire</p>
            
            <form ref={form}  onSubmit={sendEmail} className="contactForm">
    
                <input type="text" name="user_name" placeholder='Nom' required className="putForm"   />
        
                <input type="email" name="user_email" placeholder='Adresse mail' required className="putForm" />
                
                <textarea name="message" placeholder='Message' required className="msgForm" />
                <input type="submit" value="Envoyer" className="sendForm" />
                
            </form>
            <p className="Pcontact2">"Les informations partagées seront utiliser uniquement dans le but de donner suite à votre message"</p>
        </motion.div>
    );
};              

export default Contact;