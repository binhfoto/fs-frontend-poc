import { createSelector } from "reselect";

const COLUMNS_IN_EDIT_MODE = ["isSelected", "actions"];

export const modeSelector = (state) => {
    return state.mode;
};

export const tableSelector = (tableId) => {
    return (state) => {
        return state[tableId];
    };
};

export const rowsSelector = (tableId) => {
    return createSelector(modeSelector, tableSelector(tableId), (mode, table) => {
        const { rows } = table;
        const { byId, allIds } = rows;
        const flatRows = allIds.reduce((result, id) => {
            const row = byId[id];
            const { isSelected } = row;

            if (mode === "view" && !isSelected) {
                return result;
            }

            return [...result, { ...row, tableId }];
        }, []);
        return flatRows;
    });
};

export const columnsSelector = (tableId) => {
    return (state) => {
        const { mode } = state;
        if (mode === "view") {
            return state[tableId].columns.filter((column) => {
                const { key } = column;
                return COLUMNS_IN_EDIT_MODE.indexOf(key) === -1;
            });
        }
        return state[tableId].columns;
    };
};

export const currentFormulaSelector = (state) => {
    return state.currentEditedFormula;
};
