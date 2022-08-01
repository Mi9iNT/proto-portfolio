import React from 'react';
import FormationsExperiences from '../components/cv/FormationsExperiences';
import Profil from '../components/cv/Profil';
import Skills from '../components/cv/Skills';
import User from '../components/cv/User';
import Menu from '../components/menu/Menu';
import RS from '../components/reseaux_sociaux/RS';

import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div className='home'
         initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
            
        >
            <Menu />
            <RS />
            <div className="grid-container">
                
                <div className="sidebar">
                    <User />
                    <Skills />
                </div>
                <div className="mainCv">
                    <Profil />
                    <FormationsExperiences />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;