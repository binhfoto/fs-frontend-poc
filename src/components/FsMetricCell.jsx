import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UPDATE_ROW, OPEN_FORMULA_DIALOG, ADD_FORMULA } from "../redux/actions";

export default function FsMetricCell(props) {
    const { row, columnId, isEditMode } = props;
    const { tableId, uuid } = row;
    const metric = row[columnId];
    const { value, expression = "" } = metric;

    const inputEl = useRef(null);
    const dispatch = useDispatch();

    function handleFocusOut() {
        const newValue = inputEl.current.value;

        if (newValue !== value) {
            dispatch({
                type: UPDATE_ROW,
                name: tableId,
                payload: {
                    [uuid]: {
                        [columnId]: {
                            ...metric,
                            value: newValue,
                        },
                    },
                },
            });
        }
    }

    function handleFormulaDialogOpen() {
        dispatch({
            type: OPEN_FORMULA_DIALOG,
            name: tableId,
            payload: {
                row,
                columnId,
                formula: expression,
                isDialogShown: true,
            },
        });
    }

    function handleMetricSelected() {
        dispatch({
            type: ADD_FORMULA,
            payload: {
                uuid: metric.uuid,
            },
        });
    }

    if (isEditMode) {
        return (
            <Form inline onSubmit={(event) => event.preventDefault()}>
                <Form.Control
                    type="number"
                    size="sm"
                    defaultValue={value}
                    ref={inputEl}
                    onBlur={handleFocusOut}
                />
                <Button variant="outline-dark" size="sm" onClick={handleFormulaDialogOpen}>
                    f(x)
                </Button>
            </Form>
        );
    }

    return <span onClick={handleMetricSelected}>{value}</span>;
}
