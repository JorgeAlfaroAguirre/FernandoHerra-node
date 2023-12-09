import { getCatById } from '../../src/js-foundation/03-callbacks';

jest.useFakeTimers();

describe(`js-foundation / 03-callbacks.test`, () => {
    
    test('getCatById should return an error', (done) => {
        
        const id:number = 10;

        getCatById(id, (error, cat)=>{

            expect( error ).toBe(`Cat with ID ${id} not found.`);
            expect( cat ).toBeUndefined();

        })

        done();
        
        jest.advanceTimersByTime(2500);

    });

    test('getCatById should return "Sofia"', (done) => {
        
        const id:number = 2;

        getCatById(id, (error, cat)=>{

            expect( error ).toBeUndefined();
            expect( cat ).toStrictEqual({id:2, name: 'Sofia'});

        })

        done();

    });


});
