const axios = require('axios');

const { http, axiosPlugin } = require('../plugins')

const getPokemonByIdWithPlugin = async ( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get( url );

    return pokemon.name;
}

const getPokemonByIdWithAxiosPlugin = async ( id ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await axiosPlugin.get( url );

    return pokemon.name;
}



module.exports = {
    getPokemonByIdWithPlugin,
    getPokemonByIdWithAxiosPlugin
}