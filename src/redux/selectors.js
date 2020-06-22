import { createSelector } from "reselect";

export const tableSelector = (tableId) => {
    return (state) => {
        return state[tableId];
    };
};

export const rowsSelector = (tableId) => {
    return createSelector(tableSelector(tableId), (table) => {
        const { rows } = table;
        const { byId, allIds } = rows;
        const flatRows = allIds.reduce((result, id) => {
            return [...result, { ...byId[id], tableId }];
        }, []);
        return flatRows;
    });
};

export const columnsSelector = (tableId) => {
    return (state) => {
        return state[tableId].columns;
    };
};
