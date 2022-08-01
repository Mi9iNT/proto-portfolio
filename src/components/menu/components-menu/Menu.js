import React from "react";
import { NavLink } from 'react-router-dom';

import Illus from "../../../assets/fonts/fontawesome/photo-film-solid-blanc.svg";
import Film from "../../../assets/fonts/fontawesome/video-solid-blanc.svg";
import Musi from "../../../assets/fonts/fontawesome/music-note.svg";
import Abou from "../../../assets/fonts/fontawesome/about-solid-blanc.svg";
import Mentio from "../../../assets/fonts/fontawesome/note-sticky-solid-blanc.svg"

export default ({ close }) => (
  <div className="menu" onClick={close}>
    <div className="ImgBg">
      <NavLink to="/Galerie" onClick={close}>
        <img className='IllusImg' src={Illus} alt="Illustations" title="Illlustrations" id="IllusImg" />
    </NavLink>
    <NavLink to="/Jams" onClick={close}>
        <img className='MusiImg' src={Musi} alt="Jams" title="Jams" id="MusiImg" />
    </NavLink>
    <NavLink to="/Videos" onClick={close}>
        <img className='FilmImg' src={Film} alt="Vidéos" title="Vidéos" id="FilmImg" />
    </NavLink>
    <NavLink to="/Mentions-Legales" onClick={close}>
        <img className='MentioImg' src={Mentio} alt="Mentions légales" title="Mentions légales" id="MentioImg" />
    </NavLink>
    </div>
    </div>
);
