import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import isNil from "lodash/isNil";
import { CaretDown, CaretRight } from "./Icon";
import { COLLAPSE_ROW, EXPAND_ROW } from "../redux/actions";

function DropdownIcon(props) {
    const { row } = props;
    const { childIds, isCollapse } = row;
    const isLeafNode = childIds.length === 0;
    const dispatch = useDispatch();

    if (isLeafNode) {
        return <span style={{ width: 16 }}></span>;
    }

    if (isCollapse) {
        return <CaretRight />;
    }

    return <CaretDown />;
}

export default function FsIndentTextCell(props) {
    const { row, columnId, isEditMode } = props;
    const { tableId, uuid, indent } = row;
    const value = row[columnId] || "";

    const inputEl = useRef(null);
    const dispatch = useDispatch();

    const propsStyle = isNil(indent) ? {} : { marginLeft: indent * 15 };

    function handleFocusOut() {
        const newValue = inputEl.current.value;

        if (newValue !== value) {
            dispatch({
                type: "UPDATE_ROW",
                name: tableId,
                payload: {
                    [uuid]: {
                        [columnId]: newValue,
                    },
                },
            });
        }
    }

    let ele = value;
    if (isEditMode) {
        ele = (
            <Form onSubmit={(event) => event.preventDefault()}>
                <Form.Control
                    type="text"
                    size="sm"
                    defaultValue={value}
                    ref={inputEl}
                    onBlur={handleFocusOut}
                />
            </Form>
        );
    }

    return (
        <div style={propsStyle}>
            <Container style={{ padding: 0 }}>
                <Row>
                    <Col style={{ flexGrow: 0 }}>
                        <DropdownIcon row={row} />
                    </Col>
                    <Col>{ele}</Col>
                </Row>
            </Container>
        </div>
    );
}
