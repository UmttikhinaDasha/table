import React from 'react';
import './header.scss';

interface IHeader {
    children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
    return <h1 className='header'>{children}</h1>;
};

export default Header;
