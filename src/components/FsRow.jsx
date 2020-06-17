import React from "react";
import isObject from "lodash/isObject";

/* 
<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
 */

export default function FsRow(props) {
    const { row, columns, mode } = props;
    const tds = columns.map((column) => {
        const { key } = column;
        if (!row[key]) {
            return <td></td>;
        }

        if (isObject(row[key])) {
            const { value } = row[key];
            return <td>{value}</td>;
        }

        return <td>{row[key]}</td>;
    });
    return <tr>{tds}</tr>;
}
