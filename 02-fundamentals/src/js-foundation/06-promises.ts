import { http } from "../plugins";

export const getPokemonById = ( id:string|number ):void =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url).then((response)=>{

        response.json().then((pokemon)=>{
            console.log('>',pokemon.name)

        })
    });
}

export const getPokemonByIdCallBack =(id:number, callback:any)=>{
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url).then((response)=>{

        response.json().then((pokemon)=>{

            callback(pokemon.name)

        })
    });
}

export const getPokemonById2 = ( id:number ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch( url )
        .then( ( response ) => response.json())
        // .then( ()=>{ throw new Error('Pokemon no  existe')})
        .then( (pokemon ) => pokemon.name)

}

export const getPokemonByIdAsync = async( id:number ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    return pokemon.name;

}

