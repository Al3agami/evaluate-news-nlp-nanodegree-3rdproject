import { getInputValueById } from '../src/client/js/utils'

describe('Test UI elements', () => {
    test('A valid input element id should return value', () => {
        expect(getInputValueById('urlTxt')).not.toBeNull();
    });

    test('An invalid input element id should return undefined', () => {
        expect(getInputValueById('urlText')).toBeUndefined();
    })
});