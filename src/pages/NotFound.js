import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>404</h2>
            <h3>Not Found</h3>
            <h4>Bruh...</h4>
            <NavLink to="/">
              <button className="Btn-404-Me-Main">Revenir</button>
            </NavLink>
        </div>
    );
};

export default NotFound;