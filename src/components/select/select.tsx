import React, { useState } from 'react';
import './select.scss';

interface ISelect {
    label: string;
    initialValue: string;
    optionList: string[];
}

const Select: React.FC<ISelect> = ({ label, initialValue, optionList }) => {
    const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(initialValue);

    const chooseOption = (option: string) => {
        setOptionsOpen(!optionsOpen);
        setSelectedValue(option);
    };

    return (
        <div className={optionsOpen ? 'select select-active' : 'select'}>
            <span className='select__label'>{label}</span>
            <div
                className='select__header'
                onClick={() => setOptionsOpen(!optionsOpen)}>
                {selectedValue}
            </div>

            <ul className='select__list'>
                {optionList.map((option, i) => (
                    <li
                        className='select__list__item'
                        key={i}
                        onClick={() => chooseOption(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
