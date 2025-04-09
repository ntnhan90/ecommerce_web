import { Fragment } from "react";
import { Col } from "react-bootstrap";
export default function Tools() {
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                Export
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Product</a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Product Categories </a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Orders </a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                Import
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Product</a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Product Categories </a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cube"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><a href="#">Orders </a></b>
                                            </h5>
                                            <small className="text-muted">Export your product data to CSB or Excel file</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}