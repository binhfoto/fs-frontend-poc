import { combineReducers } from "redux";
import merge from "lodash/merge";
import { createTableWrapperReducer } from "./utils";
import {
    UPDATE_ROW,
    TOGGLE_ROW_SELECTION,
    OPEN_FORMULA_DIALOG,
    CLOSE_FORMULA_DIALOG,
    UPDATE_FORMULA,
    ADD_FORMULA,
} from "./actions";

function updateRowReducer(state = {}, payload) {
    return merge({}, state, payload);
}

function byIdReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_ROW_SELECTION:
        case UPDATE_ROW:
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
    const { row, columnId, formula, isDialogShown } = state;
    switch (type) {
        case OPEN_FORMULA_DIALOG:
            return payload;
        case CLOSE_FORMULA_DIALOG:
            return {
                formula: "",
                row: null,
                columnId: null,
                isDialogShown: false,
            };
        case UPDATE_FORMULA: // user inputs text
            if (isDialogShown) {
                return {
                    ...state,
                    formula: payload.formula,
                };
            }
        case ADD_FORMULA: // user selects other metrics
            const isNotCurrent = row[columnId].uuid !== payload.uuid;
            const shouldUpdate = isNotCurrent && isDialogShown;
            if (shouldUpdate) {
                return {
                    ...state,
                    formula: formula.concat(`#${payload.uuid}`),
                };
            }
        default:
            return state;
    }
};

const fsItemsReducer = combineReducers({
    currentEditedFormula: currentEditedFormulaReducer,
    mode: (state = "edit") => state,
    table4: createTableWrapperReducer(tableReducer, "table4"),
});

const fsReducer = (state, action) => {
    const { type, payload } = action;
    if (type === "UPDATE_FS") {
        return payload; // whole FS
    }
    return fsItemsReducer(state, action);
};

export default fsReducer;
