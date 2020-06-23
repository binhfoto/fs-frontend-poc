import { combineReducers } from "redux";
import merge from "lodash/merge";
import { createTableWrapperReducer } from "./utils";

function updateRowReducer(state = {}, payload) {
    return merge({}, state, payload);
}

function byIdReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case "TOGGLE_ROW_SELECTION":
        case "UPDATE_ROW":
            return updateRowReducer(state, payload);
        default:
            return state;
    }
}

function allIdsReducer(state = [], action) {
    const { type, payload } = action;
    return state;
}

function selectAllRowsReducer(state = false, action) {
    const { type, payload } = action;
    return state;
}

const rowsReducer = combineReducers({
    byId: byIdReducer,
    allIds: allIdsReducer,
});

const tableReducer = combineReducers({
    rows: rowsReducer,
    columns: (state = []) => state,
    isSelectAll: selectAllRowsReducer,
});

const currentEditedFormulaReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "OPEN_FORMULA_DIALOG":
            return payload;
        case "CLOSE_FORMULA_DIALOG":
            return {
                row: null,
                columnId: null,
                isDialogShown: false,
            };
        default:
            return state;
    }
};

const fsReducer = combineReducers({
    currentEditedFormula: currentEditedFormulaReducer,
    mode: (state = "edit") => state,
    table4: createTableWrapperReducer(tableReducer, "table4"),
});

export default fsReducer;
