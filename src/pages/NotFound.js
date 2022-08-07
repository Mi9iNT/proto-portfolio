import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <h2 className='NotFoundTitle'>404</h2>
            <h3 className='notFound'>Not Found</h3>
            <h4 className='bruh'>Bruh...</h4>
            <NavLink to="/Proto-Portfolio">
              <button className="Btn-404-Me-Main">Revenir</button>
            </NavLink>
        </div>
    );
};

export default NotFound;