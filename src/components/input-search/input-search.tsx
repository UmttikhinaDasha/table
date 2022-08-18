import React from 'react';
import './input-search.scss';

const InputSearch = () => {
    return (
        <span className='field-search'>
            <input
                className='field-search__input'
                placeholder='Поиск по №, имени и телефону клиента'
            />
        </span>
    );
};

export default InputSearch;
