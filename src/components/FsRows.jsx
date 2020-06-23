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

export default function FsRows(props) {
    const { rows, columns, mode } = props;
    const rowsWithIndent = indentRows(rows, 0);
    return (
        <>
            {rowsWithIndent.map((row, index) => (
                <FsRow key={index} row={row} index={index} columns={columns} mode={mode} />
            ))}
        </>
    );
}
