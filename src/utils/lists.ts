export const TABLE_HEADERS: string[] = [
    '№',
    'Статус',
    'Имя клиента',
    'Телефон',
    'Последний чек',
    'Дата последнего чека',
    'Транспорт',
    'Транспорт',
    'Стоимость',
];

interface IDataTable {
    id: string;
    status: string;
    name: string;
    phone: string;
    check: string;
    dateCheck: string;
    transport: string;
    markTransport: string;
    price: string;
}

export const DATA_TABLE: IDataTable[] = [
    {
        id: '101',
        status: 'Активен',
        name: 'Иван Иванов',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$100',
    },
    {
        id: '102',
        status: 'Заблокирован',
        name: 'Иван Иванов',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$100',
    },
    {
        id: '101',
        status: 'Заблокирован',
        name: 'Мария Некрасова',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$100',
    },
    {
        id: '1110',
        status: 'Активен',
        name: 'Иван Иванов',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$1',
    },
    {
        id: '101',
        status: 'В архивe',
        name: 'Иван Иванов',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$100',
    },
    {
        id: '101',
        status: 'Активен',
        name: 'Иван Иванов',
        phone: '8-911-111-11-11',
        check: '21.12.2020  16:57',
        dateCheck: '21.12.2020  16:57',
        transport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        markTransport:
            'A.R.T. MERCEDES-BENZ AS55K YAAS EDITION ABU DHABI SHEIKH SULTAN BIN RASHED AL NAHYAN 2009, Mazda 3 MPS 2015',
        price: '$100',
    },
];

export const LIST_STATUS_CLIENT: { [status: string]: string } = {
    [`Активен`]: 'green',
    [`Заблокирован`]: 'red',
    [`В архивe`]: 'blue',
};

export const LIST_OF_PARTNERS: string[] = [
    'Иван Иванов',
    'Виталий Кузнецов',
    'Петр Петров',
    'Екатерина Турова',
    'Алексей Иванов',
    'Сергей Кузнецов',
];
