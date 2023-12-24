import { CreateTable } from './create-file.use-case';

const createTable = new CreateTable();

describe(`use-cases / create-file.use-case.test`, () => {
    test('should create table with default values', () => {

        const table = createTable.execute({base:5});
        const rows = table.split('\n');

        expect(rows.length).toBe(10);
        expect( table ).toContain( '5 * 1 = 5') 
        expect( table ).toContain( '5 * 10 = 50') 
    });

    test('should create table with custom values', () => {

        const table = createTable.execute({base:5, limit:2});
        const rows = table.split('\n');

        expect(rows.length).toBe(2);
        expect( table ).toContain( '5 * 1 = 5') 
        expect( table ).toContain( '5 * 2 = 10') 
    });
});