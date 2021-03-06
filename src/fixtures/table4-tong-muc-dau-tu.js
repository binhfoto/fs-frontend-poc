import { v4 as uuidv4 } from "uuid";

export default {
    columns: [
        {
            key: "isSelected",
            value: "",
        },
        {
            key: "path",
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
            path: "1",
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
        },
        {
            isSelected: true,
            name: "Chi phí mua dự án",
            path: "1.1",
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
        },
        {
            isSelected: true,
            name: "CP mua dự án",
            path: "1.1.1",
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
        },
        {
            isSelected: true,
            name: "TSDĐ đất dự kiến đóng thêm",
            path: "1.2",
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
        },
        {
            isSelected: true,
            name: "TSDĐ TMDV",
            path: "1.2.1",
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
        },
    ],
};
