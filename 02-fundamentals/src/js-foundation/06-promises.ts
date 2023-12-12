// import { http } from "../plugins";
import {httpClientPlugin as http} from '../plugins/htttp-client-plugin'

const getPokemonById = ( id:number ):Promise<string> =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then(response => response.json())
        .then(pokemon => pokemon.name);
};

const getPokemonByIdCallBack =(id:number, callback:any)=>{
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url).then((response)=>{

        response.json().then((pokemon)=>{

            callback(pokemon.name)

        })
    });
}

const getPokemonById2 = ( id:number ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch( url )
        .then( ( response ) => response.json())
        // .then( ()=>{ throw new Error('Pokemon no  existe')})
        .then( (pokemon ) => pokemon.name)

}

const getPokemonByIdAsync = async( id:number ) =>{

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
        const pokemon = await http.get(url);
    
        return pokemon.name;
        
    } catch (error) {
        throw `Pokemon not found with id ${id}`
    }


}

export {
    getPokemonById,
    getPokemonByIdCallBack,
    getPokemonById2,
    getPokemonByIdAsync

}