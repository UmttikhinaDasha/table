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
            <div className='pagination__pages'>
                <span className='pagination__page'>1</span>
                <span className='pagination__page'>2</span>
                <span className='pagination__page active'>3</span>
                <span className='pagination__page'>4</span>
                <span className='pagination__page'>5</span>
            </div>
            <img src={rightArrow} alt='right-arrow' />
        </div>
    );
};

export default Pagination;
