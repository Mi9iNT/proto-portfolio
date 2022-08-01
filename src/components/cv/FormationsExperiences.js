import React from 'react';
import DataFormations from '../../datas/DataFormations';
import Formations from './Formations';
import Experiences from './Experiences';
import DataExperiences from '../../datas/DataExperiences';

const FormationsExperiences = () => {
    return (
        <div>
            <h2 className='titleFormations'>Formations</h2>
            <Formations datas={DataFormations} />
            <h2 className='titleExperiences'>Expériences Professionnelles</h2>
            <Experiences datas={DataExperiences} />
        </div>
    );
};

export default FormationsExperiences;