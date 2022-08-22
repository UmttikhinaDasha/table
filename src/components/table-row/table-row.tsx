import React from 'react';
import './table-row.scss';
import { LIST_STATUS_CLIENT } from '../../utils/lists';

interface ITableRow {
    rowData: string[];
}

const TableRow: React.FC<ITableRow> = ({ rowData }) => {
    const addStatusIcon = (i: number, item: string): React.ReactNode => {
        console.log(LIST_STATUS_CLIENT[item]);
        console.log(item);
        return (
            <td key={i}>
                <div className={`icon-status ${LIST_STATUS_CLIENT[item]}`} />
                {item}
            </td>
        );
    };

    const cutColumnLength = (i: number, item: string): React.ReactNode => {
        return (
            <td key={i}>
                {item.slice(0, item.indexOf(' ', 50))}
                <br />
                {item.slice(item.indexOf(' ', 50))}
            </td>
        );
    };

    const printRow = (): React.ReactNode[] => {
        return rowData.map((item, i) => {
            if (item.length > 50) {
                return cutColumnLength(i, item);
            } else {
                return i === 1 ? (
                    addStatusIcon(i, item)
                ) : (
                    <td key={i}>{item}</td>
                );
            }
        });
    };

    return <tr>{printRow()}</tr>;
};

export default TableRow;
