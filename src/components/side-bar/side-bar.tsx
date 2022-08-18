import React from 'react';
import './side-bar.scss';
import SideBarItem from '../side-bar-item/side-bar-item';
import SideBarPhone from '../side-bar-phone/side-bar-phone';

const LIST_SIDE_BAR_ITEM: string[] = [
    'Планировщик',
    'Поддержка',
    'Партнеры',
    'Клиенты',
    'Отчеты',
    'Маркетинг',
    'Пользователи',
    'Транспорт',
];

const SideBar = () => {
    return (
        <div className='side-bar'>
            {LIST_SIDE_BAR_ITEM.map((item, i) => (
                <SideBarItem key={i}>{item}</SideBarItem>
            ))}
            <SideBarPhone>8(800)2356754</SideBarPhone>
        </div>
    );
};

export default SideBar;
