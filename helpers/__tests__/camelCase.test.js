import { camelSentence } from '../camelCase';

test('camelSentence transforms hello world', () => {
  expect(camelSentence('hello world')).toBe('helloWorld');
});
