import { getPokemonById, 
        getPokemonByIdCallBack,
        getPokemonById2,
        getPokemonByIdAsync 
} from '../../src/js-foundation/06-promises';

describe(`js-foundation / 06-promises.test`, () => {

    test('getPokemonByIdAsync should return a pokemon', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonByIdAsync( pokemonId );

        expect( pokemonName ).toBe('bulbasaur');

    });

    test('getPokemonByIdAsync should return an error', async () => {

        const pokemonId = 1000000000000;

        try {
            await getPokemonByIdAsync( pokemonId );
            expect( true ).toBe(false);            
        } catch (error) {
            expect( error ).toBe('Pokemon not found with id 1000000000000');            
        }


    });

});