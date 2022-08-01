import React,{ useState } from 'react';

import CloseBTN from '../assets/fonts/fontawesome/x-solid.svg';

import Img1 from '../assets/img/illustrations/Autravers.png';
import Img2 from '../assets/img/illustrations/bo2.png';
import Img3 from '../assets/img/illustrations/Conservatoire.jpg';
import Img4 from '../assets/img/illustrations/ConservatoireLight.jpg';
import Img5 from '../assets/img/illustrations/EspaceFilet2.png';
import Img6 from '../assets/img/illustrations/FriendlyPumpkin2.png';
import Img7 from '../assets/img/illustrations/fuck4.png';
import Img8 from '../assets/img/illustrations/iang.jpg';
import Img9 from '../assets/img/illustrations/ladefense.jpg';
import Img10 from '../assets/img/illustrations/Laminutelogo.png';
import Img11 from '../assets/img/illustrations/MainFuckUkraina.png';
import Img12 from '../assets/img/illustrations/Moi2.png';
import Img13 from '../assets/img/illustrations/Mix.png';
import Img14 from '../assets/img/illustrations/Natou2mini.png';
import Img15 from '../assets/img/illustrations/NatoNtetu.png';
import Img16 from '../assets/img/illustrations/NebuleuseRouge.png';
import Img17 from '../assets/img/illustrations/NTF.png';
import Img18 from '../assets/img/illustrations/OBOH_Avatar.png';
import Img19 from '../assets/img/illustrations/Papillonllonllon.png';
import Img20 from '../assets/img/illustrations/zazon.jpg';
import Img21 from '../assets/img/illustrations/ResponsiveDesign.gif';
import Img22 from '../assets/img/illustrations/scultureenbronze.png';
import Img23 from '../assets/img/illustrations/SEO.gif';
import Img24 from '../assets/img/illustrations/snail.png';
import Img25 from '../assets/img/illustrations/TerreBlender.png';
import Img26 from '../assets/img/illustrations/PSX.jpg';
import Img27 from '../assets/img/illustrations/Moi3.png';
import Menu from '../components/menu/Menu';
import RS from '../components/reseaux_sociaux/RS';

import { motion } from "framer-motion";


const Galerie = () => {

     let data = [
        {
            id: 1,
            imgSrc: Img1,
            alt: 'au travers',
        },
        {
            id: 2,
            imgSrc: Img2,
            alt: 'BO',
        },
         {
            id: 3,
            imgSrc: Img3,
            alt: 'Conservatoire de musique',
        },
        {
            id: 4,
            imgSrc: Img4,
            alt: 'Conservatoire de musique',
        },
        {
            id: 5,
            imgSrc: Img5,
            alt: 'Terre et Lune',
        },
        {
            id: 6,
            imgSrc: Img6,
            alt: 'Citrouille',
        },
         {
            id: 7,
            imgSrc: Img7,
            alt: "Majeur en l'air F*ck",
        },
        {
            id: 8,
            imgSrc: Img8,
            alt:"Ying Yang gouttes d'eau",
        },
        {
            id: 9,
            imgSrc: Img9,
            alt: "La défence de chez moi",
        },
        {
            id: 10,
            imgSrc: Img10,
            alt: 'Logo La Minute Vibrante',
        },
         {
            id: 11,
            imgSrc: Img11,
            alt: "Majeur en l'air F*ck",
        },
        {
            id: 12,
            imgSrc: Img12,
            alt: 'Mon profil modélisé',
        },
        {
            id: 13,
            imgSrc: Img13,
            alt: 'Mon profil modélisé avec un filet de gaz rouge',
        },
        {
            id: 14,
            imgSrc: Img14,
            alt: 'Natou logo',
        },
         {
            id: 15,
             imgSrc: Img15,
            alt: 'Natou logo',
        },
        {
            id: 16,
            imgSrc: Img16,
            alt: 'Nébuleuse rouge',
        },
        {
            id: 17,
            imgSrc: Img17,
            alt: 'NTF pensif',
        },
        {
            id: 18,
            imgSrc: Img18,
            alt: 'Avatar OBOH',
        },
         {
            id: 19,
             imgSrc: Img19,
            alt: 'Papillon',
        },
        {
            id: 20,
            imgSrc: Img20,
            alt: 'PSX proto',
        },
        {
            id: 21,
            imgSrc: Img21,
            alt: 'Responsive Design',
        },
        {
            id: 22,
            imgSrc: Img22,
            alt: 'Sculture en bronze',
        },
        {
            id: 23,
            imgSrc: Img23,
            alt: 'SEO',
        },
         {
            id: 24,
             imgSrc: Img24,
            alt: 'Snail',
        },
        {
            id: 25,
            imgSrc: Img25,
            alt: 'Terre',
        },
        {
            id: 26,
            imgSrc: Img26,
            alt: 'Gazon pluvieux',
        },
        {
            id: 27,
            imgSrc: Img27,
            alt: "Mix d'images",
        },
        
    ]

    const [model, setModel] = useState(false);
    const [tempalt, setTempAlt] = useState('');
    const getAlt = (alt) => {
        setTempAlt(alt);
        setModel(true);
    }

    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }


    return (
        <motion.div className='Gallery'
        
            
            initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transitio: {duration: 0.1 } } }
            
            
        >
            <Menu />
            <RS />
            <h2 className="GalerieTitle">Galerie d'illustrations</h2>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt={tempalt} />
                <img src={CloseBTN} onClick={ () => setModel(false) } alt="fermer" className="btnClose"/>
            </div>
            
            {data.map((item, index) => {
                return (
                    <div key={index} onClick={() =>getImg(item.imgSrc)} className="ContentGalerie">
                        <img className='illu' src={item.imgSrc} alt={item.alt} title={item.alt} stryle={{width: '100%'}} />
                    </div>
                )
            })}
            </motion.div>
    );
};

export default Galerie;