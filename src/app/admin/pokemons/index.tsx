'use client'
import { Card, Button } from "react-bootstrap"






import useDictionary from "@/locales/dictionary-hook"
import { ResourceCollection } from "@/models/resource"
import { Pokemon } from "@/models/pokemon"

type Props = {
    props:{
        pokemonResource: ResourceCollection<Pokemon>
        page:number;
        perPage:number;
        sort:number;
        order:number;
    }
}

export default function Index(props:Props) {
    const {
        props: {
          pokemonResource: pokemonResourceFallback,
          page,
          perPage,
          sort,
          order,
        },
    } = props

    const dict = useDictionary();

    return(
        <Card>
            <Card.Header>
                {dict.pokemons.title}
            </Card.Header>
        </Card>
    )
}