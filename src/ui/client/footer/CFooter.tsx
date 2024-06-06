import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt , faPhoneAlt, faEnvelope, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function CFooter(){
    return(
        <Container fluid className="bg-dark text-light footer mt-5 pt-5 wow fadeIn">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>

                        <p className="mb-2"> <FontAwesomeIcon icon={faMapMarkerAlt } className="me-3" fixedWidth />123 Street, New York, USA</p>
                        <p className="mb-2"> <FontAwesomeIcon icon={faPhoneAlt } className="me-3"  fixedWidth />+012 345 67890</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope } className="me-3"  fixedWidth />info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" href="">
                                <FontAwesomeIcon icon={faFacebookF } fixedWidth />
                            </Link>
                            <Link className="btn btn-outline-light btn-social" href="">
                                <FontAwesomeIcon icon={faTwitter } fixedWidth />
                            </Link>
                            <Link className="btn btn-outline-light btn-social" href="">
                                <FontAwesomeIcon icon={faLinkedin } fixedWidth />
                            </Link>
                            <Link className="btn btn-outline-light btn-social" href="">
                                <FontAwesomeIcon icon={faInstagram } fixedWidth />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Services</h4>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            General Carpentry
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Furniture Remodeling
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Wooden Floor
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Wooden Furniture
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Custom Carpentry
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            About Us
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Contact Us</Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Our Services
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Terms &amp; Condition
                        </Link>
                        <Link className="btn btn-link" href="">
                            <FontAwesomeIcon icon={faAngleRight } className="me-1" fixedWidth />
                            Support
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto max-width-400" >
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary-color py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="copyright">
                    <Row>
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <Link className="border-bottom" href="#">Your Site Name</Link>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a className="border-bottom" href="https://dotsgrowth.com">Dotsgrowth</a>
                        </div>
                    </Row>
                </div>
            </Container>
        </Container>
     
    )
}