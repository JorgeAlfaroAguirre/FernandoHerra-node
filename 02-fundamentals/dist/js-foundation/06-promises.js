"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonByIdAsync = exports.getPokemonById2 = exports.getPokemonByIdCallBack = exports.getPokemonById = void 0;
// import { http } from "../plugins";
const htttp_client_plugin_1 = require("../plugins/htttp-client-plugin");
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then(response => response.json())
        .then(pokemon => pokemon.name);
};
exports.getPokemonById = getPokemonById;
const getPokemonByIdCallBack = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then((response) => {
        response.json().then((pokemon) => {
            callback(pokemon.name);
        });
    });
};
exports.getPokemonByIdCallBack = getPokemonByIdCallBack;
const getPokemonById2 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        // .then( ()=>{ throw new Error('Pokemon no  existe')})
        .then((pokemon) => pokemon.name);
};
exports.getPokemonById2 = getPokemonById2;
const getPokemonByIdAsync = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield htttp_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
});
exports.getPokemonByIdAsync = getPokemonByIdAsync;
