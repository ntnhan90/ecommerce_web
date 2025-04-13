import {  Col, Row , Button,Form} from "react-bootstrap";
import { Fragment } from "react";

const FilterNode = () =>{
    return(
        <Fragment>
            <Row>
                <Col>
                    <Form.Select defaultValue="Status">
                        <option>Select field...</option>
                        <option>Status</option>
                        <option>Name</option>
                        <option>Email</option>
                        <option>Phone</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select defaultValue="Is equal to">
                        <option>Contains</option>
                        <option>Is equal to</option>
                        <option>Greater than</option>
                        <option>Less than</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Form.Control placeholder="Value" />
                </Col>
            </Row>
        </Fragment>
    )
}

export default FilterNode;