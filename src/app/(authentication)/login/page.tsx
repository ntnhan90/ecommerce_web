import { Col, Row } from "react-bootstrap"
import Link from "next/link"
import LoginForm from "./login"
import { SearchParams } from "@/types/next"
import { getDictionary } from "@/locales/dictionary"

export default async function Page({ searchParams } : {searchParams: SearchParams}){
    const { callbackUrl } = searchParams;
    const dict = await getDictionary()

    const getCallbackUrl = () =>{
        if(!callbackUrl) {
            return '/';
        }

        return callbackUrl.toString();
    }

    return(
        <Row className="justify-content-center align-items-center px-3">
            <Col lg={8}>
                <Row>
                    <Col md={7} className="bg-white dark:bg-dark border p-5">
                    <div>
                        <h1>{dict.login.title}</h1>
                        <p className="text-black-50 dark:text-gray-500">{dict.login.description}</p>
                        </div>
                    </Col>
                </Row>
                
            </Col>
            
        </Row>
    )
}