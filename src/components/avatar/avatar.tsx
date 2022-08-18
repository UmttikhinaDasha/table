import React from 'react';
import './avatar.scss';

// @ts-ignore
import avatar from '../../images/avatar.png';
// @ts-ignore
import bell from '../../images/bell.png';

interface IAvatar {
    firstName: string;
    lastName: string;
    photo?: string;
}

const Avatar: React.FC<IAvatar> = ({ firstName, lastName, photo = avatar }) => {
    return (
        <div className='avatar'>
            <img alt='above_photo' className='avatar__image' src={photo} />
            <img alt='bell' className='avatar__bell' src={bell} />
            <span className='avatar__name'>{`${firstName} ${lastName}`}</span>
        </div>
    );
};

export default Avatar;
