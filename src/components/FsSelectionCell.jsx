import React from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

export default function FsSelectionCell(props) {
    const { row, columnId } = props;
    const { tableId, uuid } = row;
    const checked = row[columnId];
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch({
            type: "TOGGLE_ROW_SELECTION",
            name: tableId,
            payload: {
                [uuid]: {
                    [columnId]: event.target.checked,
                },
            },
        });
    }

    return (
        <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Check type="checkbox" onChange={handleChange} checked={checked} />
        </Form>
    );
}
