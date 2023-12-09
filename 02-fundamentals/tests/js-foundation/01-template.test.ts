import { emailTemplate } from '../../src/js-foundation/01-template';


describe(`js-foundation / 01-template.test`, () => {

    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate('testName', 123)).toContain('Hi, testName');
    });

    test('emailTemplate should contain a "Thank you for your order."', () => {
        expect(emailTemplate('testName', 123)).toContain('Thank you for your order.');
    });

    test('emailTemplate should contain a OrderId', () => {
        expect(emailTemplate('testName', 123)).toContain('Order ID: 123');
    });

});