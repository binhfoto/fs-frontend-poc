import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import isObject from "lodash/isObject";
import cloneDeep from "lodash/cloneDeep";
import partial from "lodash/partial";
// import isNil from "lodash/isNil";

function getUpdatedRow(row, columnKey, value) {
    const newRow = cloneDeep(row);
    const field = newRow[columnKey];
    if (isObject(field)) {
        newRow[columnKey].value = value;
    } else {
        newRow[columnKey] = value;
    }
    return newRow;
}

function handleFieldChange(row, rowIndex, columnKey, onRowChange, event) {
    const updatedRow = getUpdatedRow(row, columnKey, event.target.value);
    onRowChange(updatedRow, rowIndex);
}

function handleMetricFieldClick(row, rowIndex, columnKey, onMetricClick) {
    if (onMetricClick) {
        onMetricClick(row[columnKey]);
    }
}

function renderEditableTextField(row, rowIndex, columnKey, isEditMode, onRowChange) {
    const value = row[columnKey];
    if (!isEditMode) {
        return value;
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={partial(handleFieldChange, row, rowIndex, columnKey, onRowChange)}
            />
        </div>
    );
}

function renderEditableTextFieldWithIndent(row, rowIndex, columnKey, isEditMode, onRowChange) {
    const value = row[columnKey];
    const style = {
        marginLeft: row.indent * 15, // TODO: define constant for 15px
    };

    let element = value;
    if (isEditMode) {
        element = (
            <input
                type="text"
                value={value}
                onChange={partial(handleFieldChange, row, rowIndex, columnKey, onRowChange)}
            />
        );
    }

    return <div style={style}>{element}</div>;
}

function renderEditableMetricField(
    row,
    rowIndex,
    columnKey,
    isEditMode,
    onRowChange,
    onFormulaDialogOpen,
    onMetricClick,
) {
    const { value } = row[columnKey];
    if (isEditMode) {
        return (
            <Form inline onSubmit={(event) => event.preventDefault()}>
                <Form.Control
                    inline
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    value={value}
                    onChange={partial(handleFieldChange, row, rowIndex, columnKey, onRowChange)}
                />
                <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={partial(onFormulaDialogOpen, row, rowIndex, columnKey)}
                >
                    f(x)
                </Button>
            </Form>
        );
    }
    return (
        <span onClick={partial(handleMetricFieldClick, row, rowIndex, columnKey, onMetricClick)}>
            {value}
        </span>
    );
}

function renderSelectionField(row, columnKey, isEditMode) {
    const value = row[columnKey];
    if (!isEditMode) {
        return null;
    }
    return <input type="checkbox" checked={value} />;
}

function renderActionsField(isEditMode) {
    if (!isEditMode) {
        return null;
    }

    return (
        <div>
            <input type="button" value="+" />
            <input type="button" value="-" />
        </div>
    );
}

// TODO: convert this to class component so that we don't pass props around
export default function FsRow(props) {
    const { row, index: rowIndex, columns, mode, events } = props;
    const { onRowChange, onFormulaDialogOpen, onMetricClick } = events;
    const isEditMode = mode.indexOf("edit") !== -1;

    const tds = columns.map((column, index) => {
        const { key } = column;
        const fieldValue = row[key];

        if (isEditMode && index === columns.length - 1) {
            return <td key={key}>{renderActionsField(isEditMode)}</td>;
        }

        // if (isNil(fieldValue)) {
        //     // is null or undefined
        //     return <td key={key}></td>;
        // }

        if (key === "isSelected") {
            return <td key={key}>{renderSelectionField(row, key, isEditMode)}</td>;
        }

        if (key === "name") {
            return (
                <td key={key}>
                    {renderEditableTextFieldWithIndent(row, rowIndex, key, isEditMode, onRowChange)}
                </td>
            );
        }

        if (isObject(fieldValue)) {
            return (
                <td key={key}>
                    {renderEditableMetricField(
                        row,
                        rowIndex,
                        key,
                        isEditMode,
                        onRowChange,
                        onFormulaDialogOpen,
                        onMetricClick,
                    )}
                </td>
            );
        }

        return <td key={key}>{renderEditableTextField(row, rowIndex, key, isEditMode, onRowChange)}</td>;
    });

    return <tr>{tds}</tr>;
}
