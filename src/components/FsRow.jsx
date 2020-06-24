import React from "react";
import isObject from "lodash/isObject";
import FsSelectionCell from "./FsSelectionCell";
import FsTextCell from "./FsTextCell";
import FsMetricCell from "./FsMetricCell";
import FsActionsCell from "./FsActionsCell";

export default function FsRow(props) {
    const { row, columns, mode } = props;
    const isEditMode = mode.indexOf("edit") !== -1;

    const tds = columns.map((column, index) => {
        const { key } = column;
        const fieldValue = row[key];

        if (isEditMode && index === columns.length - 1) {
            return (
                <td key={key}>
                    <FsActionsCell row={row} columnId={key} isEditMode={isEditMode} />
                </td>
            );
        }

        if (key === "path") {
            return <td key={key}>{fieldValue}</td>;
        }

        if (key === "isSelected") {
            return (
                <td key={key}>
                    <FsSelectionCell row={row} columnId={key} isEditMode={isEditMode} />
                </td>
            );
        }

        if (key === "name") {
            // handle indent here
            return (
                <td key={key}>
                    <FsTextCell row={row} columnId={key} isEditMode={isEditMode} indent={row.indent} />
                </td>
            );
        }

        if (isObject(fieldValue)) {
            return (
                <td key={key}>
                    <FsMetricCell row={row} columnId={key} isEditMode={isEditMode} />
                </td>
            );
        }

        return (
            <td key={key}>
                <FsTextCell row={row} columnId={key} isEditMode={isEditMode} />
            </td>
        );
    });

    return <tr>{tds}</tr>;
}
