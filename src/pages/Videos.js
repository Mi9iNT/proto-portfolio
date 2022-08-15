import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../components/Logo';
import Menu from '../components/menu/Menu';
import RS from '../components/reseaux_sociaux/RS';

import { motion } from "framer-motion";

const API_URL = process.env.REACT_APP_API_URL;
const PLAYLIST_ID = process.env.REACT_APP_PLAYLIST_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const fecthurl = `${API_URL}part=snippet,id&order=date&playlistId=${PLAYLIST_ID}&key=${API_KEY}`




const Videos = () => {

    const [allvideos, setAllvideos] = useState([])
    useEffect(() => {
        fetch(fecthurl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => ({
                ...doc,
                videoLink: "https://www.youtube.com/embed/"+ doc.snippet.resourceId.videoId
            }));
            setAllvideos(result)
        })
    }, [])
    
    return (
        <motion.div className="content-videos"
        
            initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
            
        >
            <Logo />
            <Menu />
            <RS />
            <h2 className="title_videos">Vidéos</h2>
            <p className="text_videos">Cette liste se mettra automatiquement à jour au fur et à mesure des ajouts sur Youtube ; vous n'aurez donc qu'a passer sur cette page pour les retrouver toutes</p>
            <div className="contact-btn-Page-Videos">
                <NavLink to="/contact">
                    <button className="Btn-Contact-Me-Page-Videos">Contacter Moi</button>
                </NavLink>
            </div>
            {allvideos.map((item) => {
                return (
                    <div className='Video'>
                        <iframe className='iframYt' width="560" height="315" src={item.videoLink} title={item.description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                        
                    </div>
                );
                })}
            <div className="contact-btn-Page-Videos2">
                <NavLink to="/contact">
                    <button className="Btn-Contact-Me-Page-Videos2">Contacter Moi</button>
                </NavLink>
            </div>
            <p className='copyright'>&copy; 2022 Clairy Miguel</p>
        </motion.div>
    );
};

export default Videos;