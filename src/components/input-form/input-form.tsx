import React from 'react';
import './input-form.scss';

interface IInputForm {
    label: string;
    placeholder: string;
}

const InputForm: React.FC<IInputForm> = ({ label, placeholder }) => {
    return (
        <div className='field-form'>
            <span className='field-form__label'>{label}</span>
            <input className='field-form__input' placeholder={placeholder} />
        </div>
    );
};

export default InputForm;
