import React from 'react';
import logo from '../../images/bazaarlogo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="d-flex flex-row bg-secondary">
                <img className="mainLogo" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;