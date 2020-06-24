import React from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import FsTable from "./FsTable";
import { COLUMNS_IN_EDIT_MODE } from "../redux/selectors";
import { UPDATE_ROW, CLOSE_FORMULA_DIALOG, UPDATE_FORMULA } from "../redux/actions";

export default function FsFormulaDialog(props) {
    const {
        currentFormula: { formula, row, columnId, isDialogShown },
        rows,
        columns,
    } = props;

    const dispatch = useDispatch();

    function getCurrentMetric() {
        if (!row) {
            return null;
        }
        return row[columnId];
    }

    function renderFormulaInput() {
        const inputProps = {
            style: { width: "100%" },
            placeholder: "Table1.Name.FieldA + Table1.Name.FieldB - Table2.Name.FieldC",
        };
        return (
            <input
                {...inputProps}
                type="text"
                value={formula}
                onChange={(event) =>
                    dispatch({ type: UPDATE_FORMULA, payload: { formula: event.target.value } })
                }
            />
        );
    }

    function renderPickingFieldTable() {
        // filter out selection and actions columns which are available in edit mode
        const readonlyColumns = columns.filter((column) => COLUMNS_IN_EDIT_MODE.indexOf(column.key) === -1);
        const readonlyRows = rows.filter((row) => row.isSelected);
        return <FsTable rows={readonlyRows} columns={readonlyColumns} mode="view" />;
    }

    function handleCreate() {
        const metric = { ...getCurrentMetric(), expression: formula };

        dispatch({
            type: UPDATE_ROW,
            name: tableId,
            payload: {
                [uuid]: {
                    [columnId]: metric,
                },
            },
        });

        dispatch({
            type: CLOSE_FORMULA_DIALOG,
        });
    }

    function handleClose() {
        dispatch({
            type: CLOSE_FORMULA_DIALOG,
        });
    }

    if (!row || !isDialogShown) {
        return null;
    }
    const { tableId, uuid } = row;

    return (
        <Modal
            centered
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={isDialogShown}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Formula</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {renderFormulaInput()}
                    <br />
                    {renderPickingFieldTable()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreate}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
