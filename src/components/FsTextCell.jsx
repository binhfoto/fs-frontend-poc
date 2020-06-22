import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

export default function FsTextCell(props) {
    const { row, columnId, isEditMode } = props;
    const { tableId, uuid } = row;
    const value = row[columnId];

    const inputEl = useRef(null);
    const dispatch = useDispatch();

    function handleFocusOut() {
        const newValue = inputEl.current.value;

        if (newValue !== value) {
            dispatch({
                type: "UPDATE_ROW",
                name: tableId,
                payload: {
                    [uuid]: {
                        [columnId]: inputEl.current.value,
                    },
                },
            });
        }
    }

    if (!isEditMode) {
        return value;
    }

    return (
        <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control type="text" defaultValue={value} ref={inputEl} onBlur={handleFocusOut} />
        </Form>
    );
}
