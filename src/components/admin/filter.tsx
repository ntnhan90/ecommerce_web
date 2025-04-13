import { Fragment } from "react";
import { Card, CardHeader, CardBody,Form, Col, Row , Button} from "react-bootstrap";
import FilterNode from "./filter-node";

const FilterAdmin = () =>{
    return(
        <Fragment>
			<Card>
                <CardHeader>
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">Filter</h4>
                    </div>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FilterNode />
                        <Row className="mt-3">
                            <Col>
                                <Button variant="outline-dark" className="me-2">Add additional filter</Button>
                                <Button variant="primary">Apply</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
		</Fragment>

    )
}


export default FilterAdmin;