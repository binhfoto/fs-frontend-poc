import React from "react";
import FsRow from "./FsRow";

function indentRows(rows) {
    return rows.map((row, index) => {
        const { path } = row;
        const indent = path.split(".").length - 1;
        return {
            ...row,
            indent,
        };
    });
}

/* 
<tbody>
    <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
    </tr>
</tbody>
 */

export default function FsRows(props) {
    const { rows, columns, mode, onRowChange, onMetricChange, onMetricClick } = props;
    const rowsWithIndent = indentRows(rows, 0);
    return (
        <>
            {rowsWithIndent.map((row, index) => (
                <FsRow
                    key={index}
                    row={row}
                    index={index}
                    columns={columns}
                    mode={mode}
                    onRowChange={onRowChange}
                    onMetricChange={onMetricChange}
                    onMetricClick={onMetricClick}
                />
            ))}
        </>
    );
}
