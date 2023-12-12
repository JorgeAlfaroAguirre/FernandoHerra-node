"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06_promises_1 = require("./js-foundation/06-promises");
// import { getPokemonNameByIdWithPlugin } from "./js-foundation/07-promises-with-plugin";
// import { getAge, getUUID } from "./plugins";
// import { buildLogger } from "./plugins/logger.plugin"
// // const logger = buildLogger('app.js');
// // const { getPokemonByIdWithPlugin, 
// //         getPokemonByIdWithAxiosPlugin } = require('./js-foundation/07-promises-with-plugin')
(0, _06_promises_1.getPokemonById)(1).then(name => console.log(name));
// getPokemonByIdCallBack(1,(pokemon:string)=>console.log({pokemon}));
// getPokemonById2(2)
//     .then((pokemon)=>console.log({pokemon}))
// const porque = async (id:number)=>{
//     const pokemonName = await getPokemonByIdAsync(id);
//     console.log(`El nombre del Pokémon es: ${pokemonName}`);
// }
// porque(5)
// getPokemonById2(2)
// .then((pokemon)=>console.log({pokemon}))
// const getPokemonInfo = async () => {
//     try {
//       const pokemonName = await getPokemonByIdAsync(1);
//       console.log(`El nombre del Pokémon es: ${pokemonName}`);
//     } catch (error) {
//       console.error('Hubo un error:', error);
//     }
//   };
// getPokemonInfo();
// const aer = async (id:number)=>{
//     const pokemonName = await getPokemonByIdAsync(id);
//     console.log(`El nombre del Pokémon es: ${pokemonName}`);
// }
// aer(1)
// getPokemonById2(1)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log('Por favor intente de nuevo'))
//     // .catch( ( error ) => console.log( { error } ) )
//     .finally( ()=>console.log('Finalmente'))
// getPokemonByIdAsync(4)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log(error))
//     .finally( ()=>console.log('Finalmente'))
// console.log('\n-----------------------------3--------------------------------\n')
// const logger = buildLogger('app.js');
// logger.log('Hola mundo!');
// logger.error("perro");
// getPokemonNameByIdWithPlugin(150)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log(error))
//     .finally( ()=>console.log('Finalmente'))
// // getPokemonByIdWithAxiosPlugin(8)
// //     .then((pokemon)=>console.log({pokemon}))
// //     .catch( ( error ) => console.log(error))
// //     .finally( ()=>console.log('Finalmente'))
// // logger.log('Hola mundo!');
// // logger.error("papas");
