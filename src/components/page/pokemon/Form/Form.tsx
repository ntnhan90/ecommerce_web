'use client'

import { useFormState, useFormStatus } from "react-dom"
import { Alert, Button, Col, Form as BSForm, FormCheck, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import React,{ useEffect} from "react"
import classNames from "classnames"
import Image from "next/image"
import { Pokemon } from "@/models/pokemon"
import FormError from "@/components/form/FormError"
import PokemonTypeLabel from "../PokemonTypeLabel"
import create from "@/app/admin/pokemons/create/action"
import useDictionary from "@/locales/dictionary-hook"
import { Type } from "@/models/type"
import { EggGroup } from "@/models/egg_group"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"
import { constant } from "lodash"

type Props ={
    type: Type[];
    eggGroups: EggGroup[];
    pokemon? : Pokemon;
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
export default function Form(props: Props){
    const { pokemon, type, eggGroups } = props;
    const dict = useDictionary();

    const [state, formAction] = useFormState(create, {
        success: false,
        validated: false,
        message: '',
        formKey: 0,
    })

    return(
        <BSForm noValidate key={state.formKey} action={formAction}>
            <Alert variant={state.success ? "success" : 'danger'}
                show={state.errors === undefined && state.message !== ''}
            >
                {state.message}
            </Alert>

            {pokemon && (
                <div className="position-relative mx-auto"
                    style={{ height: '150px' , width: "150px" }}
                >
                    <Image fill style={{objectFit:'contain'}} alt={pokemon.pokemondb_identifier} 
                         sizes="5vw" src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`}
                        />
                </div>
            )}

            <FormGroup className="mb-3">
                <FormLabel>{dict.pokemons.attribute.name}</FormLabel>
                <FormControl  type="text" name="name"
                    defaultValue={pokemon?.name}
                    isInvalid={!!state.errors?.name} required
                />
                <FormError messages={state.errors?.name} />
            </FormGroup>          
        </BSForm>
    )

}