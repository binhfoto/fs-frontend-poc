import React from "react";
import Table from "react-bootstrap/Table";

import FsRows from "./FsRows";

function renderHeader(columns) {
    const tds = columns.map((column, index) => <th key={index}>{column.value}</th>);
    return (
        <thead>
            <tr>{tds}</tr>
        </thead>
    );
}

function renderRows(rows, columns, mode) {
    return (
        <tbody>
            <FsRows rows={rows} columns={columns} />
        </tbody>
    );
}

function FsTable(props) {
    const { rows, columns, mode } = props;

    return (
        <Table striped bordered>
            {renderHeader(columns, mode)}
            {renderRows(rows, columns, mode)}
        </Table>
    );
}

export default FsTable;
