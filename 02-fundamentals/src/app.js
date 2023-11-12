//1
const { emailTemplate } = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring');
const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserByIdArrow } = require('./js-foundation/04-arrow');
const { buildMakePerson } = require('./js-foundation/05-factory');
const { getUUID, 
        getAge, 
        http,
        buildLogger
        } = require('./plugins');

const logger = buildLogger('app.js');

const { getPokemonByIdWithPlugin, 
        getPokemonByIdWithAxiosPlugin } = require('./js-foundation/07-promises-with-plugin')

//2

const { getPokemonById, 
        getPokemonByIdCallBack,
        getPokemonById2,
        getPokemonByIdAsync
    } = require('./js-foundation/06-promises') 

//3



console.log('\n-----------------------------1--------------------------------\n')

console.log(emailTemplate)

const id = 2;

getUserById(id, function(error, user){
    if( error ){
        throw new Error(error);
    }
    console.log(user)
})

getUserByIdArrow(id, (error, user)=>{
    if( error ){
        throw new Error(error);
    }
    console.log(user)
})

const makePerson = buildMakePerson( {getUUID, getAge} ); //Inyección de dependencias de getUUID, y getAge

const jorge = makePerson({ name: 'Jorge', birthdate: '1988-01-16'});

console.log(jorge);

console.log('\n-----------------------------2--------------------------------\n')


// console.log(getPokemonById(1));

// getPokemonByIdCallBack(1, ( pokemon )=>{
//     console.log({pokemon})
// })

// getPokemonById2(1)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log('Por favor intente de nuevo'))
//     // .catch( ( error ) => console.log( { error } ) )
//     .finally( ()=>console.log('Finalmente'))


// getPokemonByIdAsync(1)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log(error))
//     .finally( ()=>console.log('Finalmente'))

console.log('\n-----------------------------3--------------------------------\n')

// getPokemonByIdWithPlugin(4)
//     .then((pokemon)=>console.log({pokemon}))
//     .catch( ( error ) => console.log(error))
//     .finally( ()=>console.log('Finalmente'))

getPokemonByIdWithAxiosPlugin(8)
    .then((pokemon)=>console.log({pokemon}))
    .catch( ( error ) => console.log(error))
    .finally( ()=>console.log('Finalmente'))


logger.log('Hola mundo!');

logger.error("papas");