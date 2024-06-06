import Link from "next/link";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function CTopHeader(){
    return(
        <div className="container-fluid bg-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>123 Street, New York, USA</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center py-3">
                        <small className="far fa-clock text-primary me-2"></small>
                        <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                        <FontAwesomeIcon fixedWidth icon={faPhoneAlt}></FontAwesomeIcon>
                        <small>+012 345 6789</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                            <FontAwesomeIcon fixedWidth icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                        <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                            <FontAwesomeIcon fixedWidth icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                            <FontAwesomeIcon fixedWidth icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                        <a className="btn btn-sm-square bg-white text-primary me-0" href="">
                            <FontAwesomeIcon fixedWidth icon={faInstagram}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}