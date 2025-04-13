import { Row, Col, Card, CardBody, Form } from "react-bootstrap";

export default function Setting() {
    return(
        <Row>
            <Col xs={12} md={3}>
                <h3> Payment method</h3>
                <span>Setup payment methods for website</span>
            </Col>
            <Col xs={12} md={9}>
                <Card>
                    <CardBody>
                        <Form className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Default payment method </option>
                                <option value="1">Cash on delivery (COD)</option>
                                <option value="2">Bank Tranfer</option>
                                <option value="3">Momo </option>
                            </Form.Select>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
    )
}