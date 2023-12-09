import { getUserByIdArrow } from '../../src/js-foundation/04-arrow';

describe(`js-foundation / 04-arrow.test`, () => {
    test('getUserByIdArrow should return an error', (done) => {
        
        const id:number = 10;

        getUserByIdArrow(id, (error, cat)=>{

            expect( error ).toBe(`No use with id ${id}`);
            expect( cat ).toBeUndefined();

        })

        done();
        
        jest.advanceTimersByTime(2500);
        
    });

    test('getUserByIdArrow should return "Sofia"', (done) => {
        
        const id = 2;

        getUserByIdArrow(id, (error, cat)=>{

            expect( error ).toBeUndefined();
            expect( cat ).toStrictEqual({id:2, name: 'Sofia'});

        })

        done();

    });

});