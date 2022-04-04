import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <ul className='nav'>
                <NavLink to="/home" activeClassName > HOME </NavLink>
                <NavLink to="/reviews" activeClassName> REVIEWS </NavLink>
                <NavLink to="/dashboard" activeClassName > DASHBOARD</NavLink>
                <NavLink to="/blogs" activeClassName > BLOGS </NavLink>
                <NavLink to="/about" activeClassName > ABOUT </NavLink>
            </ul>
        </div>
    );
};

export default Header;