import React from 'react';
import './modal-form.scss';
import InputForm from '../input-form/input-form';
import Select from '../select/select';
import { LIST_OF_PARTNERS, LIST_STATUS_CLIENT } from '../../utils/lists';
import Checkbox from '../checkbox/checkbox';
import ButtonForm from '../button-form/button-form';

interface IModalForm {
    active: boolean;
    setActive(data: boolean): void;
}

const ModalForm: React.FC<IModalForm> = ({ active, setActive }) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className='modal__content'
                onClick={(e) => e.stopPropagation()}>
                <h2 className='modal-title'>Фильтр</h2>

                <InputForm label={'№'} placeholder={'Номер'} />
                <Select
                    label={'Статус клиента'}
                    initialValue={'Все статусы'}
                    optionList={LIST_STATUS_CLIENT}
                />
                <InputForm label={'Имя клиента'} placeholder={'Введите имя'} />
                <InputForm label={'Телефон'} placeholder={'Введите номер'} />
                <Select
                    label={'Выбрать партнера'}
                    initialValue={'Все'}
                    optionList={LIST_OF_PARTNERS}
                />
                <InputForm label={'Имя клиента'} placeholder={'Введите имя'} />
                <Checkbox label={'Показать заблокированных'} />

                <div className='wrapper-button'>
                    <ButtonForm />
                </div>
            </div>
        </div>
    );
};

export default ModalForm;
