import React from 'react';
import { DATA_TABLE, TABLE_HEADERS } from '../../utils/lists';
import TableRow from '../table-row/table-row';
import './table.scss';

const Table = () => {
    return (
        <div className='wrapper-table'>
            <table className='table'>
                <thead>
                    <tr>
                        {TABLE_HEADERS.map((header) => (
                            <th>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {DATA_TABLE.map((rowData) => (
                        <TableRow rowData={Object.values(rowData)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
