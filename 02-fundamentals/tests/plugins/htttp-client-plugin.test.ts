import { httpClientPlugin } from '../../src/plugins/htttp-client-plugin';

describe(`plugins / htttp-client-plugin.test`, () => {
    test('httpClientPlugin.get() should return a string', async () => {

        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: expect.any(Boolean)
        });
    });


    test('httpClientPlugin should have POST, PUT and Delete methods', async () => {

        expect( typeof httpClientPlugin.post ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function');
        expect( typeof httpClientPlugin.delete ).toBe('function');

    });

    test('httpClientPlugin.post() should return an error', async () => {

        const mockUrl = 'https://example.com/api/v1/posts';
        const mockBody = {
          title: 'My post title',
          content: 'My post content',
        };

        const expectedError = new Error('Not implemented');

        try {

            await httpClientPlugin.post(mockUrl, mockBody);

            fail('Expected an error to be thrown');

          } catch (error) {

            expect(error).toEqual(expectedError);

          }

          try {

            await httpClientPlugin.put(mockUrl, mockBody);

            fail('Expected an error to be thrown');

          } catch (error) {

            expect(error).toEqual(expectedError);

          }

          
          try {

            await httpClientPlugin.delete(mockUrl, mockBody);

            fail('Expected an error to be thrown');

          } catch (error) {

            expect(error).toEqual(expectedError);

          }

    });


});