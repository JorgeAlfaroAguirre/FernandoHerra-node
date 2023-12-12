import { getAge } from '../../src/plugins/get-age.plugin';

describe(`plugins / get-age.plugin.test`, () => {
    
    test('getAge() should return the age as a number', () => {

        const birthdate = '1988-01-16'
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');

    });

    test('getAge() should return current age', () => {

        const birthdate = '1988-01-16'
        const age = getAge(birthdate);
        
        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        
        expect( age ).toEqual( calculateAge );

    });

    test('getAge() should return current 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1988);
        // console.log(spy);
        const birthdate = '1988-01-16'
        const age = getAge(birthdate);


        expect( age ).toEqual( 0 );

    });
});