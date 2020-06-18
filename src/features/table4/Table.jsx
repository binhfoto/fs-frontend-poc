import React from "react";
import isObject from "lodash/isObject";

import FsTable from "../../components/FsTable";
import fixture from "../../fixtures/table4-tong-muc-dau-tu";

class FsTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = fixture;
    }

    render() {
        const { columns, rows } = this.state;
        return <FsTable columns={columns} rows={rows} mode="edit" onRowChange={this.handleRowChange} />;
    }

    handleRowChange = (updatedRow, rowIndex) => {
        const { rows } = this.state;
        const updatedRows = rows.map((row, index) => {
            if (rowIndex === index) {
                return updatedRow;
            }

            return row;
        });

        this.setState({ rows: updatedRows });
    };
}

export default FsTableContainer;
