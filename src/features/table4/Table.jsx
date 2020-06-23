import React, { Component } from "react";
import { useSelector } from "react-redux";
import FsFormulaDialog from "../../components/FsFormulaDialog";
// import isObject from "lodash/isObject";
import FsTable from "../../components/FsTable";
// TODO: fetch this from backend
import fixture from "../../fixtures/table4-tong-muc-dau-tu";
import { rowsSelector, columnsSelector, modeSelector, currentFormulaSelector } from "../../redux/selectors";

// class FsTableContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ...fixture,
//             currentEditedFormula: {
//                 isDialogShown: false,
//                 row: null,
//                 rowIndex: null,
//                 columnKey: null,
//             },
//         };
//     }

//     render() {
//         const { columns, rows, currentEditedFormula } = this.state;

//         return (
//             <>
//                 <FsTable
//                     columns={columns}
//                     rows={rows}
//                     mode="edit"
//                     events={{
//                         onRowChange: this.handleRowChange,
//                         onFormulaDialogOpen: this.handleFormulaDialogOpen,
//                     }}
//                 />
//                 <FsFormulaDialog
//                     currentFormula={currentEditedFormula}
//                     columns={columns}
//                     rows={rows}
//                     onCreate={this.handleFormulaCreate}
//                     onClose={this.handleFormulaCancel}
//                 />
//             </>
//         );
//     }

//     handleRowChange = (updatedRow, rowIndex) => {
//         const { rows } = this.state;
//         const updatedRows = rows.map((row, index) => {
//             if (rowIndex === index) {
//                 return updatedRow;
//             }
//             return row;
//         });

//         this.setState({ rows: updatedRows });
//     };

//     handleMetricChange = (row, rowIndex, columnKey) => {
//         const metric = row[columnKey];
//         const { value } = metric;

//         if (value.indexOf("=") === -1) {
//             return;
//         }

//         this.setState({
//             currentEditedFormula: {
//                 row,
//                 rowIndex,
//                 columnKey,
//                 isDialogShown: true,
//             },
//         });
//     };

//     handleFormulaDialogOpen = (row, rowIndex, columnKey) => {
//         this.setState({
//             currentEditedFormula: {
//                 row,
//                 rowIndex,
//                 columnKey,
//                 isDialogShown: true,
//             },
//         });
//     };

//     handleFormulaCreate = (updatedRow, rowIndex) => {
//         this.toggleFormulaDialog(false);
//         this.handleRowChange(updatedRow, rowIndex);
//     };

//     handleFormulaCancel = () => {
//         this.toggleFormulaDialog(false);
//     };

//     toggleFormulaDialog = (isDialogShown) => {
//         this.setState({
//             currentEditedFormula: { isDialogShown },
//         });
//     };
// }

// export default FsTableContainer;

export default function Table(props) {
    const { id } = props;
    const rows = useSelector(rowsSelector(id));
    const columns = useSelector(columnsSelector(id));
    const mode = useSelector(modeSelector);
    const currentEditedFormula = useSelector(currentFormulaSelector);
    return (
        <>
            <FsTable id={id} columns={columns} rows={rows} mode={mode} />
            <FsFormulaDialog currentFormula={currentEditedFormula} columns={columns} rows={rows} />
        </>
    );
}
