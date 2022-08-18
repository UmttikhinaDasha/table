import React from 'react';
import './button-search.scss';
// @ts-ignore
import filters from '../../images/filters.svg';

const ButtonSearch = () => {
    return (
        <button className='button'>
            <img alt='icon-search' className='button__img' src={filters} />
            <span className='button__text'>Фильтры</span>
        </button>
    );
};

export default ButtonSearch;
