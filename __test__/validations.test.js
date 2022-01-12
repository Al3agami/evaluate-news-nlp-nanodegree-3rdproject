import { isValidUrl } from '../src/client/js/validations'

describe('Test the url validation function', () => {
    test('A valid input url should return true', () => {
        expect(isValidUrl('https://www.google.com')).toBeTruthy();
    });

    test('An invalid input url should return false', () => {
        expect(isValidUrl('url2')).toBeFalsy();
    })
});