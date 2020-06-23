import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import isNil from "lodash/isNil";

export default function FsTextCell(props) {
    const { row, columnId, isEditMode, indent } = props;
    const { tableId, uuid } = row;
    const value = row[columnId] || "";

    const inputEl = useRef(null);
    const dispatch = useDispatch();

    const propsStyle = isNil(indent) ? {} : { marginLeft: indent * 15 };

    function handleFocusOut() {
        const newValue = inputEl.current.value;

        if (newValue !== value) {
            dispatch({
                type: "UPDATE_ROW",
                name: tableId,
                payload: {
                    [uuid]: {
                        [columnId]: newValue,
                    },
                },
            });
        }
    }

    let ele = value;
    if (isEditMode) {
        ele = (
            <Form onSubmit={(event) => event.preventDefault()}>
                <Form.Control
                    type="text"
                    size="sm"
                    defaultValue={value}
                    ref={inputEl}
                    onBlur={handleFocusOut}
                />
            </Form>
        );
    }

    return <div style={propsStyle}>{ele}</div>;
}
