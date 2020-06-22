import { createStore } from "redux";
import fsReducer from "./reducers";
import initialState from "./initialState";

const store = createStore(fsReducer, initialState);

export default store;
