const getPokemonById = ( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url).then((response)=>{

        response.json().then((pokemon)=>{
            console.log(pokemon.name)

        })
    });

    return `Pokemon ${id}:`
}

const getPokemonByIdCallBack =(id, callback)=>{
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url).then((response)=>{

        response.json().then((pokemon)=>{

            callback(pokemon.name)

        })
    });
}

const getPokemonById2 = ( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch( url )
        .then( ( response ) => response.json())
        // .then( ()=>{ throw new Error('Pokemon no  existe')})
        .then( (pokemon ) => pokemon.name)

}

const getPokemonByIdAsync = async( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);

    const pokemon = await response.json();

    // throw new Error('Pokemon no  existe');

    return pokemon.name;

}

module.exports = {
    getPokemonById,
    getPokemonByIdCallBack,
    getPokemonById2,
    getPokemonByIdAsync
}