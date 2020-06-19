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

function renderRows(rows, columns, mode, events) {
    return (
        <tbody>
            <FsRows rows={rows} columns={columns} mode={mode} events={events} />
        </tbody>
    );
}

function FsTable(props) {
    const { rows, columns, mode, events } = props;

    return (
        <Table striped bordered size="xl">
            {renderHeader(columns, mode)}
            {renderRows(rows, columns, mode, events)}
        </Table>
    );
}

export default FsTable;
