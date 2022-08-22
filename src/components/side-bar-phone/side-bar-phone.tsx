import React from 'react';
import './side-bar-phone.scss';
// @ts-ignore
import phone from '../../images/telephone.svg';

interface ISideBarPhone {
    children: React.ReactNode;
}

const SideBarPhone: React.FC<ISideBarPhone> = ({ children }) => {
    return (
        <span className='side-bar__telephone'>
            <img
                alt='img_telephone'
                className='side-bar__telephone__image'
                src={phone}
            />
            <span className='side-bar__telephone__link'>{children}</span>
        </span>
    );
};

export default SideBarPhone;
