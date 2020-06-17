import React from "react";
import FsTable from "../../components/FsTable";

import fixture from "../../fixtures/table4-tong-muc-dau-tu";

class FsTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = fixture;
    }

    render() {
        const { columns, rows } = this.state;

        return <FsTable columns={columns} rows={rows} mode="edit" />;
    }
}

export default FsTableContainer;
