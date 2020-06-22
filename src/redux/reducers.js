import { combineReducers } from "redux";
import merge from "lodash/merge";
import { createTableWrapperReducer } from "./utils";

function updateRowReducer(state = {}, action) {
    const { payload } = action;
    return merge({}, state, payload);
}

function byIdReducer(state = {}, action) {
    const { type, name, payload } = action;
    switch (type) {
        case "TOGGLE_ROW_SELECTION":
        case "UPDATE_ROW":
            return updateRowReducer(state, action);
        default:
            return state;
    }
}

function allIdsReducer(state = [], action) {
    const { type, name, payload } = action;
    return state;
}

function selectAllRowsReducer(state = false, action) {
    const { type, name, payload } = action;
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

const fsReducer = combineReducers({
    table4: createTableWrapperReducer(tableReducer, "table4"),
});

export default fsReducer;
