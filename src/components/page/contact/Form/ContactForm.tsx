'use client'

import { useFormState, useFormStatus } from "react-dom"
import { Alert, Button, Col, Form as BSForm, FormCheck, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import React,{ useEffect} from "react"
import classNames from "classnames"
import Image from "next/image"
import { Pokemon } from "@/models/pokemon"
import FormError from "@/components/form/FormError"
import create from "@/app/admin/pokemons/create/action"
import useDictionary from "@/locales/dictionary-hook"
import { Type } from "@/models/type"
import { EggGroup } from "@/models/egg_group"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"

type Props ={
    
}

const SubmitButton = ({
    validated,
    success,
}: { validated:boolean; success: boolean}) =>{
    const {pending } = useFormStatus()
    const dict = useDictionary();

    useEffect(() => {
        if (validated) {
          window.scrollTo(0, 0)
        }
    }, [validated, pending])
    
    useEffect(() => {
        if (success) {
          // Reset form
        }
    }, [success, pending])

    return(
        <Button variant="success" aria-disabled={pending} className="me-3" type="submit">
            {pending ? dict.action.submitting : dict.action.submit}
        </Button>
    )
}
export default function ContactForm(props: Props){
    const dict = useDictionary();
    
    const [state, formAction] = useFormState(create, {
        success: false,
        validated: false,
        message: '',
        formKey: 0,
    })

    console.log(state);
    return(
        <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control max-height-100" placeholder="Leave a message here" id="message"></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary-color w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
    )

}