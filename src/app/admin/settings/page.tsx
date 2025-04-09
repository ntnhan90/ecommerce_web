import { Fragment } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

export default function Setting() {
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                Common
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cog"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">General</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your general settings</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Email</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your email setting </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-envelope-open"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Email Templates</Link></b>
                                            </h5>
                                            <small className="text-muted">Email templates using HTML & system variables </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-file"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Media</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your media settings </small>
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
                                Ecommerce
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-cog"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">General</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your general settings</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-dollar-sign"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Currencies</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update currency settings</small>
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
                                Other
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-share-alt"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Social Login</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your social login settings</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-address-card"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Contact</Link></b>
                                            </h5>
                                            <small className="text-muted">Settings for contact</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-chart-bar"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Google Analytics</Link></b>
                                            </h5>
                                            <small className="text-muted">Config Credentials for gg analitics</small>
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