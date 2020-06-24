import React from "react";
import { useSelector } from "react-redux";
import FsFormulaDialog from "../../components/FsFormulaDialog";
import FsTable from "../../components/FsTable";
import { rowsSelector, columnsSelector, modeSelector, currentFormulaSelector } from "../../redux/selectors";

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
