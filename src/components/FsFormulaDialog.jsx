import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import isEqual from "lodash/isEqual";

import FsTable from "./FsTable";

export default class FsFormulaDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formula: this.getFormulaValue(),
        };
    }

    componentDidUpdate() {
        const { expression: formula } = this.getCurrentMetric() || {};
        if (formula && formula !== this.state.formula) {
            this.setState({ formula });
        }
    }

    render() {
        const {
            currentFormula: { isDialogShown },
        } = this.props;

        return (
            <Modal
                centered
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                show={isDialogShown}
                onHide={this.handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Formula</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {this.renderFormulaInput()}
                        <br />
                        {this.renderPickingFieldTable()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    renderFormulaInput = () => {
        const { formula } = this.state;
        const inputProps = {
            style: { width: "100%" },
            placeholder: "Table1.FieldA + Table1.FieldB - Table2.FieldC",
        };
        return <input {...inputProps} type="text" value={formula} onChange={this.handleFormulaChange} />;
    };

    renderPickingFieldTable = () => {
        const { rows, columns } = this.props;
        return <FsTable rows={rows} columns={columns} mode="view" onMetricClick={this.handleMetricClick} />;
    };

    handleMetricClick = (metric) => {
        if (isEqual(metric, this.getCurrentMetric())) {
            return;
        }

        const { uuid } = metric;
        const { formula } = this.state;
        this.setState({
            formula: formula.concat(`#${uuid}`),
        });
    };

    handleFormulaChange = (event) => {
        this.setState({
            formula: event.target.value,
        });
    };

    handleCreate = () => {
        const {
            currentFormula: { row, rowIndex, columnKey },
        } = this.props;
        const { formula } = this.state;
        const metric = { ...this.getCurrentMetric(), expression: formula };

        this.props.onCreate(
            {
                ...row,
                [columnKey]: metric,
            },
            rowIndex,
        );
        this.resetFormula();
    };

    handleClose = () => {
        this.resetFormula();
        this.props.onClose();
    };

    resetFormula = () => {
        this.setState({
            formula: "",
        });
    };

    getFormulaValue = () => {
        const metric = this.getCurrentMetric();
        const { expression } = metric || {};
        return expression || "";
    };

    getCurrentMetric = () => {
        const {
            currentFormula: { row, columnKey },
        } = this.props;

        if (!row) {
            return null;
        }

        return row[columnKey];
    };
}
