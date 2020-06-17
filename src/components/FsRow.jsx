import React from "react";
import isObject from "lodash/isObject";

/* 
<tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
 */

function renderEditableField(value, type = "text", indent) {
    const style = {
        marginLeft: indent * 15,
    };
    return (
        <div style={style}>
            <input type={type} defaultValue={value} />
        </div>
    );
}

function renderSelectionField(value) {
    return <input type="checkbox" checked={value} />;
}

function renderActionsField() {
    return (
        <div>
            <input type="button" value="+" />
            <input type="button" value="-" />
        </div>
    );
}

export default function FsRow(props) {
    const { row, columns, mode } = props;
    const isEditMode = mode.indexOf("edit") !== -1;
    let tds = columns.map((column) => {
        const { key } = column;

        if (key === "actions" && isEditMode) {
            return <td key={key}>{renderActionsField()}</td>;
        }

        if (row[key] === undefined || row[key] === null) {
            return <td key={key}></td>;
        }

        if (key === "isSelected" && isEditMode) {
            return <td key={key}>{renderSelectionField(row[key])}</td>;
        }

        if (isObject(row[key])) {
            const { value } = row[key];
            return <td key={key}>{isEditMode ? renderEditableField(value, "number") : value}</td>;
        }

        return (
            <td key={key}>
                {isEditMode
                    ? renderEditableField(row[key], "text", key === "name" ? row.indent : 0)
                    : row[key]}
            </td>
        );
    });

    return <tr>{tds}</tr>;
}
