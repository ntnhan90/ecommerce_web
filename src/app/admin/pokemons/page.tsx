import React from "react";
import { newResource, ResourceCollection } from "@/models/resource";
import { Pokemon } from "@/models/pokemon";
import { SearchParams } from "@/types/next";
import Index from "./index"
import serverFetch from "@/utils/server-fetch";
import { getLocale } from "@/locales/dictionary";

const fetchPokemon = async( searchParam: SearchParams) =>{
    const locale = getLocale();

    const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}${locale}_pokemons` || ``;
    let page = 1;
    if(searchParam?.page){
        page = parseInt(searchParam.page.toString(), 10)
    }

    let perPage = 20;
    if(searchParam?.per_page){
        perPage = parseInt(searchParam.per_page.toString(), 10)
    }

    let sort = 'id';
    if(searchParam?.sort){
        sort = searchParam.sort.toString();
    }

    let order = 'asc';
    if(searchParam?.order && typeof searchParam.order  === 'string'){
        order = searchParam.order
    }

    const url = new URL(pokemonListURL);
    url.searchParams.set('_page', page.toString())
    url.searchParams.set('_limit', perPage.toString())
    url.searchParams.set('_sort', sort)
    url.searchParams.set('_order', order)

    const res = await serverFetch(url, {
        method: 'GET',
    });

    const pokemons :Pokemon[] = await res.json();

    const total = Number( res.headers.get('x-total-count')) ?? 0;
    const pokemonResource: ResourceCollection<Pokemon> = newResource( pokemons, total, page, perPage);

    return{
        pokemonResource,
        page,
        perPage,
        sort,
        order
    }
}

export default async function Page({searchParams} :{searchParams: SearchParams}){
    const props = await fetchPokemon(searchParams);

    return(
        <Index props={props} />
    )
}