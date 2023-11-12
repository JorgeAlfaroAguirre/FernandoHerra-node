import { http, axiosPlugin } from '../plugins';

export const getPokemonNameByIdWithPlugin = async ( id: string|number ):Promise<string> =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get( url );

    return pokemon.name;
}

export const getPokemonByIdWithAxiosPlugin = async ( id: number ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await axiosPlugin.get( url );

    return pokemon.name;
}

