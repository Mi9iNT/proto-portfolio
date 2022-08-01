import React from 'react';
import ReactPlayer from 'react-player';
import Logo from '../components/Logo';
import Menu from '../components/menu/Menu';
import RS from '../components/reseaux_sociaux/RS';

import { motion } from "framer-motion";

const Jams = () => {
    return (
        <motion.div className="contentJams"
        
            initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
            
        >
            <Logo />
            <Menu />
            <RS />
            <h2>Jams</h2>
            <p className="jam_pitch">Au plaisir de les partager, ils sont fait pour mes soins en grande part sur Music Maker Jam et sont donc libre de droit en vous saignant pas trop vos (no) n'oreilles (j'espère) 🤪</p>
            <div className="jams">
                
                
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/dis-chordal" />
                    <h3 className='jam_title'>Dis Chordal</h3>
                    <p className='jam_text'>Ou comment se lacher un bon coup 😎</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/butterfly-mp3" />
                    <h3 className='jam_title'>Butterfly</h3>
                    <p className='jam_text'>Plaisir 🌞</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/easier-remix" />
                    <h3 className='jam_title'>Easier Remix</h3>
                    <p className='jam_text'>à vos avis 🤔</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/quit_mars_to_earth_ep1-mp3" />
                    <h3 className='jam_title'>Quit Mars To Earth</h3>
                    <p className='jam_text'>Une folie qui m'est une folie car elle m'a été inspirée par The Blessed Madonna ❤🖤</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/seumset-mp3" />
                    <h3 className='jam_title'>Seumset</h3>
                    <p className='jam_text'>À vous les mouchoirs...blague à part ce couché de soleil était hyper doux 😎</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/corona-da-coroner" />
                    <h3 className='jam_title'>Corona da Coroner</h3>
                    <p className='jam_text'>Ce fût long et pourtant ce n'est pas finit...Aaahhh Coconanana...😷</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/feel" />
                    <h3 className='jam_title'>Feel</h3>
                    <p className='jam_text'>J'ai apprécié au point où j'en ai fait moult version mais celle ci restera 🤩</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/choubi" />
                    <h3 className='jam_title'>Choubi</h3>
                    <p className='jam_text'>Bonheur pour mon oreilles 💯</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/deep-vybz" />
                    <h3 className='jam_title'>DeepVybz</h3>
                    <p className='jam_text'>J'suis partis un poil loin, juste un poil 🤏</p>
                </div>
                <div className='jam'>
                    <ReactPlayer url="https://soundcloud.com/myguel-mgsx-clairy/escape" />
                    <h3 className='jam_title'>Escape</h3>
                    <p className='jam_text'>Une mélodie qui me hantait et qui a donnée ça 🤔</p>
                </div>
            
            </div>
        </motion.div>
    );
};

export default Jams;