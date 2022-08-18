import React from 'react';
import './main-page.scss';
import Header from '../../components/header/header';
import Avatar from '../../components/avatar/avatar';
import SideBar from '../../components/side-bar/side-bar';
import InputSearch from '../../components/input-search/input-search';
import ButtonSearch from '../../components/button-search/button-search';
import Table from '../../components/table/table';
import Pagination from '../../components/pagination/pagination';

const MainPage = () => {
    return (
        <div className='wrap'>
            <Header>BiBiCar</Header>
            <Avatar firstName={'Александра'} lastName={'Разумова'} />
            <SideBar />
            <div className='content'>
                <h2 className='content__title'>Клиенты</h2>
                <div className='content__search-field-group'>
                    <InputSearch />
                    <ButtonSearch />
                </div>
                <Table />
                <Pagination />
            </div>
        </div>
    );
};

export default MainPage;
