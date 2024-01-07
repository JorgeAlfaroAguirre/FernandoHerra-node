
const runCommand = async( args: string[])=>{

    process.argv = [...process.argv, ...args];

    const {yarg} = await import('./args.plugin');

    return yarg;
}

const originalArgv = process.argv;

beforeEach(()=>{
    process.argv = originalArgv;
    jest.resetModules();
})

describe(`plugins / args.plugin.test`, () => {
    test('should return default values', async() => {

        const argv = await runCommand(['-b','5' ]);

        // console.log(argv);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: './outputs',
        }));
    });

    test('should return configuration with custom values', async() => {

        const argv = await runCommand(['-b','8', '-l', '20', '-s', '-n',  'custom-table', '-d', 'custom-dir']);

        // console.log(argv);

        expect(argv).toEqual(expect.objectContaining({
            b: 8,
            l: 20,
            s: true,
            n: 'custom-table',
            d: 'custom-dir',
        }));
    });

}); 