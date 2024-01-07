import { CreateTable } from '../domain/use-cases/create-file.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe(`presentation / server-app.test`, () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        destination: 'test-destination',
        name: 'test-filename'
    }        
    

    test('should create a ServerApp intance', () => {

        const severApp = new ServerApp()

        expect(severApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    
    });

    // test('Integration Test: should run ServerApp with options', ()=>{

    //     // const logSpy = jest.spyOn(console, 'log');
    //     const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    //     const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    //     const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

    //     ServerApp.run(options);

    //     expect( logSpy ).toHaveBeenCalledTimes(2);
    //     expect( logSpy ).toHaveBeenCalledWith('Server running...');
    //     expect( logSpy ).toHaveBeenCalledWith('File created!');

    //     expect( createTableSpy ).toHaveBeenCalledTimes(1); 
    //     expect( createTableSpy ).toHaveBeenCalledWith({
    //         base:options.base , limit: options.limit
    //     });

    //     expect( saveFileSpy ).toHaveBeenCalledTimes(1); 
    //     expect( saveFileSpy ).toHaveBeenCalledWith({
    //         fileContent: expect.any(String),
    //         fileDestination: options.destination,
    //         fileName: options.name
    //     }); 
    // })

    test('should ran with custom values mocked', ()=>{

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('Mocked value');
        const saveFileMock = jest.fn();

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect( logMock ).toHaveBeenCalledWith('Server running...');
        expect( logErrorMock ).not.toHaveBeenCalledWith();
        expect( createTableMock ).toHaveBeenCalledWith({"base": 2, "limit": 10});
        expect( saveFileMock ).toHaveBeenCalledWith({
            "fileContent": "Mocked value", 
            "fileDestination": options.destination, 
            "fileName":  options.name
        });

    })
});