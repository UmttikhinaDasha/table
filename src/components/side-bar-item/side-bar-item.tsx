import React from 'react';
import './side-bar-item.scss';

interface ISideBarItem {
    children: React.ReactNode;
}

const SideBarItem: React.FC<ISideBarItem> = ({ children }) => {
    return <a className='side-bar__item'>{children}</a>;
};

export default SideBarItem;
