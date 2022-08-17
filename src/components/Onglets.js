import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PortraitImg from '../assets/img/portrait.png';
import AvatarIco from '../assets/img/Avatar.svg';
import ImgIco from '../assets/fonts/fontawesome/photo-film-solid-blanc.svg';
import VideoIco from '../assets/fonts/fontawesome/video-solid-blanc.svg';
import MusicIco from '../assets/fonts/fontawesome/music-note.svg';

import EraThumb from '../assets/img/thumbs/erathumb.png';
import UnmotThumb from '../assets/img/thumbs/1mot1filmthumb.png';
import BlinguageThumb from '../assets/img/thumbs/blinguage-demothumb.png';

import SliderJams from './sliders/SliderJams';
import Slider480 from './sliders/Slider480';
import SliderOngletVideos from './sliders/SliderOngletVideos';

const Onglets = () => {

const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
         <img src={AvatarIco} alt="Portrait" title="Portrait" id="AvatarCropped "
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        </img>
        <img src={ImgIco} alt="Mes Illustrations" title="Mes Illustrations" 
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        </img>
        <img src={VideoIco} alt="Mes Vidéos" title="Mes Vidéos"
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        </img>
        <img src={MusicIco} alt="Mes Jams" title="Mes Jams"
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
        </img>      
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 className="Title-Onglet">Portrait</h2>
          <hr className="trait1" />
          <hr className="trait2" />
          <div className="contentPortrait">
            <img className="ImgPortait" src={PortraitImg} alt="Mon Portrait" title="Mon Portrait Photoshopé"  />
            <p className="pitchPortrait">Je me présente comme étant <span className='pitchBleu'>Clairy Miguel Développeur Front-End</span> et <span className='pitchBleu'>Designer Web</span>.</p>
            <p className="pitchPortrait">J'ai réalisé cette application web dans le but d'apprendre et peaufiner mon apprentissage sur ce type de <br/><span className='pitchBleu'>technologie</span>.</p>
            <p className="pitchPortrait">Car comme son nom l'indique il s'agit d'un Prototype Web qui est contruit autour de l'architecture de <br/><span className='pitchBleu'>ReactJS</span></p>
            <p className="pitchPortrait">Application que j'ai pu apprécié au point de vouloir en faire mon portfolio pour y présenter ce que je peux m'amuser à réaliser tant en sites et applications qu'en contenus Web</p>
            <br/>
            <div className='ContentLinkPortrait'>
              <a href="#sites-web" className='LinkPortrait'>
                Des sites Web
              </a>
              <a href="#mes-illustrations" className='LinkPortrait' onClick={() => toggleTab(2)}>
                Des Illustrations
              </a>
              <a href="#mes-videos" className='LinkPortrait' onClick={() => toggleTab(3)}>
                Des Vidéos
              </a>
              <a href="#mes-jams" className='LinkPortrait'onClick={() => toggleTab(4)}>
                Des Jams
              </a>
            </div>
            <br/>
            <p className="pitchPortraitLast">En vous souhaitant bien sur une chouette visite</p>
            <p className="pitchPortraitNb">ps: les feedbacks sont hautement appréciés car ils permettent avant tout de se perfectionner donc à ceux qui m'en feront 💙 sur vous</p>
            
          </div>
          <div className="ThumbSiteSection">
            <h2>Sites Web</h2>
            <div className="siteWeb" id="sites-web">
              <div className="ThumbContent">
                <img className="ThumbImgSite" src={EraThumb} alt="Miniature site web en-rechercher-active" />
                <h3 className='TitleThumb'>en-recherche-active</h3>
                <p className="ParaThumb">Banque de CV réalisé avec Symfony</p>
                <a className="Linkthumb" href="https://en-recherche-active.com/" target="blank">Lien</a>
              </div>
              <div className="ThumbContent">
                <img className="ThumbImgSite" src={UnmotThumb} alt="Miniature site web 1mot1film" />
                <h3 className='TitleThumb'>1mot1film</h3>
                <p className="ParaThumb">Application de recherche de film réalisé avec ReactJS</p>
                <a className="Linkthumb" href="https://polite-faun-e327f7.netlify.app/" target="blank">Lien</a>
              </div>
              <div className="ThumbContent">
                <img className="ThumbImgSite" src={BlinguageThumb} alt="Miniature site web Blinguage-Demo" />
                <h3 className='TitleThumb'>Blinguage-Demo</h3>
                <p className="ParaThumb">Intégration d'une maquette avec Responsive et Animation avec ReactJS en moins de deux heures</p>
                <a className="Linkthumb" href="https://mi9int.github.io/Blinguage-Demo/" target="blank">Lien</a>
              </div>
            </div>
          </div>
          <div className="contact-btn">
            <NavLink to="/contact">
              <button className="Btn-Contact-Me-Main">Contacter Moi</button>
            </NavLink>
          </div>
          
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"} id="mes-illustrations"
        >
          <h2 className="Title-Onglet">Mes Illustrations</h2>
          <hr className="trait1" />
          <hr className="trait2" />
          <Slider480 />
          <div className="WhatUse">
            <p className="pitchSoft">J'utilise principalement ces logiciels afin de réaliser mes illustrations :</p>
            <span className="pitchBleu">
              <ul className="Software">
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/aftereffects.html" target="blank">AfterEffects</a></li>
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/illustrator.html" target="blank">Illustrator</a></li>
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/photoshop.html" target="blank">Photoshop</a></li>
                <li><a className="LinkSoftware" href="https://www.blender.org/" target="blank">Blender3D</a></li>
              </ul>
            </span>
            <div className="contact-btn-galerie">
              <NavLink to="/contact">
              <button className="Btn-Contact-Me-Galerie">Contacter Moi</button>
              </NavLink>
              <NavLink to="/Galerie">
                <button className="Btn-Galerie-Me-Main">Galerie</button>
              </NavLink>
            </div>
            
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"} id="mes-videos"
        >
          <h2 className="Title-Onglet">Mes vidéos</h2>
          <hr className="trait1" />
          <hr className="trait2" />
          <SliderOngletVideos />
          <div className="WhatUseVideos">
            <p className="pitchSoft">J'utilise principalement ces logiciels afin de réaliser mes Vidéos et Animations :</p>
            <span className="pitchBleu">
              <ul className="Software">
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/aftereffects.html" target="blank">AfterEffects</a></li>
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/premiere.html" target="blank">Première Pro</a></li>
                <li><a className="LinkSoftware" href="https://www.adobe.com/fr/products/audition.html" target="blank">Audition</a></li>
                <li><a className="LinkSoftware" href="https://www.blender.org/" target="blank">Blender3D</a></li>
              </ul>
            </span>
            <div className="contact-btn-Videos">
              <NavLink to="/contact">
              <button className="Btn-Contact-Me-Videos">Contacter Moi</button>
              </NavLink>
              <NavLink to="/Videos">
                <button className="Btn-Videos-Me-Main">Vidéos</button>
              </NavLink>
            </div>
            
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"} id="mes-jams"
        >
          <h2 className="Title-Onglet">Mes Jams</h2>
          <hr className="trait1" />
          <hr className="trait2" />
          <SliderJams />
          <div className="WhatUsejams">
            <p className="pitchSoft">J'utilise principalement ces logiciels afin de réaliser mes Jams :</p>
            <span className="pitchBleu">
              <ul className="Software">
                <li>
                  <a className="Magix" href="https://www.magix.com/fr/musique/music-maker/" target="blank">Music Maker Jam</a>
                </li>
              </ul>
            </span>
            <div className="contact-btn-Jams">
              <NavLink to="/contact">
              <button className="Btn-Contact-Me-Jams">Contacter Moi</button>
              </NavLink>
              <NavLink to="/Jams">
                <button className="Btn-Jams-Me-Main">Jams</button>
              </NavLink>
            </div>
            
          </div>
        </div>      
      </div>
    </div>
  );
}

export default Onglets;