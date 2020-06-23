import React from "react";
import { useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";

export default function FsActionsCell(props) {
    const { row, columnId, isEditMode } = props;
    const dispatch = useDispatch();

    function handleAddRow() {
        dispatch({
            type: "ADD_ROW",
        });
    }

    function handleRemoveRow() {
        dispatch({
            type: "REMOVE_ROW",
        });
    }

    if (isEditMode) {
        return (
            <div>
                <Badge pill variant="success" onClick={handleAddRow}>
                    +
                </Badge>{" "}
                <Badge pill variant="danger" onClick={handleRemoveRow}>
                    -
                </Badge>
            </div>
        );
    }

    return null;
}
