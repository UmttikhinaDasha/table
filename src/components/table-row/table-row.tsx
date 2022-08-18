import React from 'react';

interface ITableRow {
    rowData: string[];
}

const TableRow: React.FC<ITableRow> = ({ rowData }) => {
    const printRow = (): React.ReactNode[] => {
        return rowData.map((item, i) => {
            if (item.length > 50) {
                return (
                    <td key={i}>
                        {item.slice(0, item.indexOf(' ', 50))}
                        <br />
                        {item.slice(item.indexOf(' ', 50))}
                    </td>
                );
            } else {
                return <td key={i}>{item}</td>;
            }
        });
    };

    return <tr>{printRow()}</tr>;
};

export default TableRow;
