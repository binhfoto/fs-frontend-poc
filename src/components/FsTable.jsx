import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FsRows from "./FsRows";

function renderColumns(columns) {
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
            <FsRows rows={rows} columns={columns} mode={mode} />
        </tbody>
    );
}

function FsTable(props) {
    const { rows = [], columns = [], mode = "view" } = props;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Table striped bordered size="xl">
                        {renderColumns(columns, mode)}
                        {renderRows(rows, columns, mode)}
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default FsTable;
