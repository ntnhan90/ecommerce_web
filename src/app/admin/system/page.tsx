import { Fragment } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

export default function AdminSystem() {
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                System
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-users"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Users</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your system users</small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-user-tag"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Role and Permissions</Link></b>
                                            </h5>
                                            <small className="text-muted">View and update your role and permissions </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-file-code"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Activity Logs</Link></b>
                                            </h5>
                                            <small className="text-muted">View and delete your system activity logs </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-database"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Backup</Link></b>
                                            </h5>
                                            <small className="text-muted">Backup datatabse and uploads folder </small>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <span className="stamp stamp-md bg-secondary me-3">
                                                <i className="fas fa-calendar-alt"></i>
                                            </span>
                                            <div>
                                            <h5 className="mb-1">
                                                <b><Link href="#">Cronjob</Link></b>
                                            </h5>
                                            <small className="text-muted">Cronjob allow you to automate certain commands or scripts on your site. </small>
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