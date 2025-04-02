'use client'
import Link from "next/link"
import { Row, Col, Card } from "react-bootstrap"

export default function DashboardMain () {
    return(
        <div className="page-inner">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
                <div>
                    <h3 className="fw-bold mb-3">Dashboard</h3>
                </div>
                <div className="ms-md-auto py-2 py-md-0">
                    <Link href="#" className="btn btn-label-info btn-round me-2">Manage</Link>
                    <Link href="#" className="btn btn-primary btn-round">Add Customer</Link>
                </div>
            </div>
            <Row>
                <Col sm="6" md="3">
                    <Card className="card-stats card-round">
                        <Card.Body>
                            <Row className="align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-info bubble-shadow-small" >
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                                <Col className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                    <p className="card-category">Users</p>
                                    <h4 className="card-title">1303</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="3">
                    <Card className="card-stats card-round">
                        <Card.Body>
                            <Row className="align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-primary bubble-shadow-small" >
                                        <i className="fab fa-product-hunt"></i>
                                    </div>
                                </div>
                                <Col className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                    <p className="card-category">Products</p>
                                    <h4 className="card-title">12</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="3">
                    <Card className="card-stats card-round">
                        <Card.Body>
                            <Row className="align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-secondary bubble-shadow-small" >
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                </div>
                                <Col className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                    <p className="card-category">Orders</p>
                                    <h4 className="card-title">576</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="3">
                    <Card className="card-stats card-round">
                        <Card.Body>
                            <Row className="align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-success bubble-shadow-small" >
                                        <i className="fas fa-luggage-cart"></i>
                                    </div>
                                </div>
                                <Col className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                    <p className="card-category">Sales</p>
                                    <h4 className="card-title">$ 1345</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>
        </div>
    )
}