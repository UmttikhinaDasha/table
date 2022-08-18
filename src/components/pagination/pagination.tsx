import React from 'react';
import './pagination.scss';

// @ts-ignore
import leftArrow from '../../images/leftArrow.svg';
// @ts-ignore
import rightArrow from '../../images/rightArrow.svg';

const Pagination = () => {
    return (
        <div className='pagination'>
            <img src={leftArrow} alt='left-arrow' />
            <div className='pages'>
                <a className='page'>1</a>
                <a className='page'>2</a>
                <a className='page active'>3</a>
                <a className='page'>4</a>
                <a className='page'>5</a>
            </div>
            <img src={rightArrow} alt='right-arrow' />
        </div>
    );
};

export default Pagination;
