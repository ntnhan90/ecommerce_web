import { Container } from "react-bootstrap";
import classNames from "classnames";
import bg from "../../../../public/images/carousel-1.jpg";

export default  function  CBreadcrumb() {
    return(
        <Container fluid className=" page-header py-5 mb-5" style={{
            background: `linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(${bg.src}) center center no-repeat;`
          }}>
            <Container className="py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </Container>
        </Container>
    )
}