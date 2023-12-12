import { getUUID } from '../../src/plugins/get-id.plugin';


describe(`plugins / get-id.plugin.test`, () => {
    
    const uuid = getUUID();
    
    test('getUUID() should return a UUID', () => {

        expect(typeof uuid).toBe('string');
        
    });

    test('getUUID() return UUID lenght should be 36', () => {

        expect( uuid.length ).toBe( 36 );

    });
});