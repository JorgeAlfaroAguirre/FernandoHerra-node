import { cats } from '../../src/js-foundation/02-destructuring';

describe(`js-foundation / 02-destructuring.test`, () => {

    test('Cats must not be empty', () => {
        expect(cats.length).toBeGreaterThan(0);
    });
    
    test('Cats should contain Pepita', () => {
        expect(cats).toContain('Pepita');
    });

    test('Cats should start with Warren and end with Pepita', () => {
        
        const [ First, , Last] = cats;
        
        expect(First).toContain('Warren');
        expect(Last).toContain('Pepita');
        
    });
});