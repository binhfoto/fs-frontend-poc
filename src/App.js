import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import store from "./redux/store";
import Table from "./features/table4/Table";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Table id="table4" />
            </div>
        </Provider>
    );
}

export default App;
