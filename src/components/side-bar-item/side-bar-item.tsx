import React from 'react';
import './side-bar-item.scss';

interface ISideBarItem {
    children: React.ReactNode;
}

const SideBarItem: React.FC<ISideBarItem> = ({ children }) => {
    return <span className='side-bar__item'>{children}</span>;
};

export default SideBarItem;
