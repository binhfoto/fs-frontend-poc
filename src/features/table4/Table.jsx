import React from "react";
// import isObject from "lodash/isObject";

import FsTable from "../../components/FsTable";
import FsFormulaDialog from "../../components/FsFormulaDialog";

import fixture from "../../fixtures/table4-tong-muc-dau-tu";

class FsTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...fixture,
            formula: {
                isDialogShown: false,
                row: null,
                rowIndex: null,
                columnKey: null,
            },
        };
    }

    render() {
        const {
            columns,
            rows,
            formula: { isDialogShown },
        } = this.state;
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
                    isDialogShown={isDialogShown}
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

        if (value.indexOf("=") !== -1) {
            this.toogleFormulaDialog(true);
        }
    };

    handleFormulaCreate = () => {
        this.toogleFormulaDialog(false);
    };

    handleFormulaCancel = () => {
        this.toogleFormulaDialog(false);
    };

    toogleFormulaDialog = (isDialogShown) => {
        this.setState({
            formula: { isDialogShown },
        });
    };
}

export default FsTableContainer;
