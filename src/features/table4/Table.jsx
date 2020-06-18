import React, { Component } from "react";
// import isObject from "lodash/isObject";

import FsTable from "../../components/FsTable";
import FsFormulaDialog from "../../components/FsFormulaDialog";

// TODO: fetch this from backend
import fixture from "../../fixtures/table4-tong-muc-dau-tu";

class FsTableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...fixture,
            currentEditedFormula: {
                isDialogShown: false,
                row: null,
                rowIndex: null,
                columnKey: null,
            },
        };
    }

    render() {
        const { columns, rows, currentEditedFormula } = this.state;

        return (
            <>
                <FsTable
                    columns={columns}
                    rows={rows}
                    mode="edit"
                    onRowChange={this.handleRowChange}
                    onMetricChange={this.handleMetricField}
                />
                <FsFormulaDialog
                    currentFormula={currentEditedFormula}
                    columns={columns}
                    rows={rows}
                    onCreate={this.handleFormulaCreate}
                    onClose={this.handleFormulaCancel}
                />
            </>
        );
    }

    handleRowChange = (updatedRow, rowIndex) => {
        const { rows } = this.state;
        const updatedRows = rows.map((row, index) => {
            if (rowIndex === index) {
                return updatedRow;
            }
            return row;
        });

        this.setState({ rows: updatedRows });
    };

    handleMetricField = (row, rowIndex, columnKey) => {
        const metric = row[columnKey];
        const { value } = metric;

        if (value.indexOf("=") === -1) {
            return;
        }

        this.setState({
            currentEditedFormula: {
                row,
                rowIndex,
                columnKey,
                isDialogShown: true,
            },
        });
    };

    handleFormulaCreate = (updatedRow, rowIndex) => {
        this.toggleFormulaDialog(false);
        this.handleRowChange(updatedRow, rowIndex);
    };

    handleFormulaCancel = () => {
        this.toggleFormulaDialog(false);
    };

    toggleFormulaDialog = (isDialogShown) => {
        this.setState({
            currentEditedFormula: { isDialogShown },
        });
    };
}

export default FsTableContainer;
