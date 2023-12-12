import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe(`js-foundation / 05-factory.test`, () => {

    const getUUID = ()=>'123';
    const getAge = ()=>36;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});

        expect(typeof makePerson).toBe('function');
    });

    test('MakePerson should return a person', () => {

        const makePerson = buildMakePerson({getUUID, getAge});

        const aPerson = makePerson({name:"TestPerson", birthdate: '1988-01-16'} )

        console.log(aPerson);

        expect(aPerson).toEqual({ 
            id: '123', 
            name: 'TestPerson', 
            birthdate: '1988-01-16', 
            age: 36 
        });
    });
});