import React from 'react';
import './checkbox.scss';

interface ICheckbox {
    label: string;
}

const Checkbox: React.FC<ICheckbox> = ({ label }) => {
    return (
        <div className='checkbox'>
            <input className='checkbox__input' type='checkbox' />
            <label className='checkbox__label'>{label}</label>
        </div>
    );
};

export default Checkbox;
