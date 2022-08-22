import React from 'react';
import './button-search.scss';
// @ts-ignore
import filters from '../../images/filters.svg';

interface IButtonSearch {
    setActive(data: boolean): void;
}

const ButtonSearch: React.FC<IButtonSearch> = ({ setActive }) => {
    return (
        <button className='button' onClick={() => setActive(true)}>
            <img alt='icon-search' className='button__img' src={filters} />
            <span className='button__text'>Фильтры</span>
        </button>
    );
};

export default ButtonSearch;
