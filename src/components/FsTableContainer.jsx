import React from "react";
import FsTable from "./FsTable";
import { v4 as uuidv4 } from "uuid";

const fixture = {
    columns: [
        {
            key: "isSelected",
            value: "",
        },
        {
            key: "name",
            value: "CHỈ TIÊU",
        },
        {
            key: "price",
            value: "ĐƠN GIÁ",
        },
        {
            key: "amount",
            value: "KHỐI LƯỢNG",
        },
        {
            key: "thanhTien",
            value: "THÀNH TIỀN (CHƯA VAT)",
        },
        {
            key: "note",
            value: "GHI CHÚ",
        },
        {
            key: "actions",
            value: "",
        },
    ],
    rows: [
        {
            isSelected: true,
            name: "Chi phí mua dự án (đã bao gồm TSDĐ)",
            price: {
                uuid: uuidv4(),
                value: 6080000,
                expression: "",
                displayFormula: "",
                unit: "",
                path: "",
            },
            amount: {
                uuid: uuidv4(),
                value: 99000,
                expression: "",
                displayFormula: "",
                unit: "",
                path: "",
            },
            thanhTien: {
                uuid: uuidv4(),
                value: null,
                expression: "",
                displayFormula: "",
                unit: "",
                path: "",
            },
            note: "",
            rows: [
                {
                    isSelected: true,
                    name: "Chi phí mua dự án",
                    price: {
                        uuid: uuidv4(),
                        value: 5000000,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    amount: {
                        uuid: uuidv4(),
                        value: 99000,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    thanhTien: {
                        uuid: uuidv4(),
                        value: null,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    note: "",
                    rows: [
                        {
                            isSelected: true,
                            name: "CP mua dự án",
                            price: {
                                uuid: uuidv4(),
                                value: 5000000,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            amount: {
                                uuid: uuidv4(),
                                value: 99000,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            thanhTien: {
                                uuid: uuidv4(),
                                value: null,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            note: "",
                            rows: [],
                        },
                    ],
                },
                {
                    isSelected: true,
                    name: "TSDĐ đất dự kiến đóng thêm",
                    price: {
                        uuid: uuidv4(),
                        value: 5000000,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    amount: {
                        uuid: uuidv4(),
                        value: 1080000,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    thanhTien: {
                        uuid: uuidv4(),
                        value: null,
                        expression: "",
                        displayFormula: "",
                        unit: "",
                        path: "",
                    },
                    note: "",
                    rows: [
                        {
                            isSelected: true,
                            name: "TSDĐ TMDV",
                            price: {
                                uuid: uuidv4(),
                                value: 1080000,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            amount: {
                                uuid: uuidv4(),
                                value: 99000,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            thanhTien: {
                                uuid: uuidv4(),
                                value: null,
                                expression: "",
                                displayFormula: "",
                                unit: "",
                                path: "",
                            },
                            note: "",
                            rows: [],
                        },
                    ],
                },
            ],
        },
    ],
};

class FsTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = fixture;
    }

    render() {
        const { columns, rows } = this.state;

        return <FsTable columns={columns} rows={rows} mode="view" />;
    }
}

export default FsTableContainer;
