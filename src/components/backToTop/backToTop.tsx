import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop(){
    return(
        <Link href="#" className="btn btn-lg btn-primary-color btn-lg-square rounded-0 back-to-top">
            <FontAwesomeIcon icon={faArrowUp}/>
        </Link>
    )
}


