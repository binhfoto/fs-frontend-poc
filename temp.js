const rows = {
    byId: {
        uuid1: {
            name: "ABC",
            amount: { value: 99000 },
            price: { value: 500000 },
            childIds: ["uuid3", "uuid4"],
        },
        uuid2: {
            name: "BCD",
            amount: { value: 99000 },
            price: { value: 500000 },
            childIds: ["uuid5"],
        },
        uuid3: {
            name: "CDE",
            amount: { value: 99000 },
            price: { value: 500000 },
        },
        uuid4: {
            name: "DEF",
            amount: { value: 99000 },
            price: { value: 500000 },
        },
        uuid5: {
            name: "EFG",
            amount: { value: 99000 },
            price: { value: 500000 },
        },
    },
    allIds: ["uuid1", "uuid2", "uuid3", "uuid4", "uuid5"],
};

const tables = {
    byId: {
        table1: {
            data: rows,
            isSelectAll: false,
        },
        table4: {
            data: rows,
            isSelectAll: true,
        },
    },
    allIds: ["table1", "table4"],
};

const fs = {
    table1: {
        data: rows,
        isSelectAll: false,
    },
    table4: {
        data: rows,
        isSelectAll: true,
    },
};
