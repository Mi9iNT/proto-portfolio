import React from 'react';
import Skill from './Skill';
import AE from '../../assets/img/Skills/After.svg';
import Blender from '../../assets/img/Skills/Blender.svg';
import CSS from '../../assets/img/Skills/CSS3.svg';
import HTML from '../../assets/img/Skills/HTML5.svg';
import GIT from '../../assets/img/Skills/GIT.svg';
import AI from '../../assets/img/Skills/Illustrator.svg';
import JS from '../../assets/img/Skills/Javascript.svg';
import PS from '../../assets/img/Skills/Photoshop.svg';
import PHP from '../../assets/img/Skills/PHP.svg';
import Premiere from '../../assets/img/Skills/Premiere.svg';
import Reactjs from '../../assets/img/Skills/React.svg';
import Vuejs from '../../assets/img/Skills/Vuejs.svg';
import SaSs from '../../assets/img/Skills/Sass.svg';
import Symfony from '../../assets/img/Skills/Symfony.svg';
import Webflow from '../../assets/img/Skills/Webflow.svg';
import WP from '../../assets/img/Skills/Wordpress.svg';
import XD from '../../assets/img/Skills/XD.svg';
import Interests from './Interests';

const Skills = () => {
    return (
        <div className='competences'>
            <div className='skills'>
                <h2 className='skills-title-competences'>Compétences</h2>
                <div className="competence">
                    <Skill title="HTML" />
                        <img src={HTML} alt="HTML" className='skillImg' /> 
                    <Skill title="CSS" />
                        <img src={CSS} alt="CSS" className="skillImg" />
                    <Skill title="SCSS/Sass" />
                        <img src={SaSs} alt="Sass" className="skillImg" />
                    <Skill title="Javascript" />
                        <img src={JS} alt="Javascript" className='skillImg' />
                    <Skill title="PHP" />
                        <img src={PHP} alt="PHP" className='skillImg' />
                    <Skill title="Symfony" />
                        <img src={Symfony} alt="Symfony" className='skillImg' />
                    <Skill title="REACTjs" />
                        <img src={Reactjs} alt="ReactJS" className='skillImg' />
                    <Skill title="VUEjs" />
                        <img src={Vuejs} alt="VueJS" className='skillImg' />
                    <Skill title="GIT" />
                        <img src={GIT} alt="GIT" className='skillImg' />
                    <Skill title="Wordpress" />
                        <img src={WP} alt="Wordpress" className='skillImg' />
                    <Skill title="Webflow" />
                        <img src={Webflow} alt="Webflow" className='skillImg' />
                    <Skill title="Illustrator" />
                        <img src={AI} alt="Illustrator" className='skillImg' />
                    <Skill title="Photoshop" />
                        <img src={PS} alt="Photoshop" className='skillImg' />
                    <Skill title="AdobeXD" />
                        <img src={XD} alt="AdobeXd" className='skillImg' />
                    <Skill title="Premère Pro" />
                        <img src={Premiere} alt="Première Pro" className='skillImg' />
                    <Skill title="After Effects" />
                        <img src={AE} alt="After Effects" className='skillImg' />
                    <Skill title="Blender3" />
                        <img src={Blender} alt="Blender3D" className='skillImg' />
                </div>
            </div>
            <div className="skills">
                <div className="langues">
                    
                    <h2 className='skills-title-langues' colspan="2">Langues</h2>
                        
                    <table className="skill-langues">
                    <tbody>
                        <tr>
                            <td>
                                <Skill className='skill-langue' title="Français" />
                            </td>
                            <td>
                                <Skill className='skill-langue' rating="Maternelle" />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Skill className='skill-langue' title="Anglais" />
                            </td>
                            <td>
                                <Skill className='skill-langue' rating="Technique" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                    
                </div>
            </div>
            <Interests />
        </div>
        
    );
};

export default Skills;