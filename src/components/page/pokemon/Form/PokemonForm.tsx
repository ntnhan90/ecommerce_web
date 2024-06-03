import Form from "./Form";
import { Pokemon  } from "@/models/pokemon";
import { Resource } from "@/models/resource";
import { Type } from "@/models/type";
import { getLocale } from "@/locales/dictionary";
import serverFetch from "@/utils/server-fetch";
import { EggGroup } from "@/models/egg_group";

type Props = {
    pokemons? : Pokemon
}

export default async function PokemonForm(props : Props){

    return(
        <>
            Form
        </>
    )
}