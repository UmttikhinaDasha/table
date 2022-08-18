import React from 'react';

interface ITableRow {
    rowData: string[];
}
const TableRow: React.FC<ITableRow> = ({ rowData }) => {
    return (
        <tr>
            {rowData.map((item) => (
                <td>{item}</td>
            ))}
        </tr>
    );
};

export default TableRow;
