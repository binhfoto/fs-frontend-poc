import React from "react";
import isEmpty from "lodash/isEmpty";

import FsRow from "./FsRow";

function normalizeRows(rows, indent) {
    let flatRows = [];

    rows.forEach((row) => {
        if (!row) {
            return [];
        }

        flatRows = [...flatRows, { ...row, indent }];
        if (!isEmpty(row.rows)) {
            flatRows = [...flatRows, ...normalizeRows(row.rows, indent + 1)];
        }
    });

    return flatRows;
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
    const { rows, columns, mode } = props;
    const normalizedRows = normalizeRows(rows, 0);
    return (
        <>
            {normalizedRows.map((row, index) => (
                <FsRow key={index} row={row} columns={columns} mode={mode} />
            ))}
        </>
    );
}
