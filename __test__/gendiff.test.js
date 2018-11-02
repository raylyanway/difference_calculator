import fs from 'fs';
import diff from '../src';

// eslint-disable-next-line
test('files is equal', () => {
  // eslint-disable-next-line
  expect(diff(
    // eslint-disable-next-line
    '__test__/__fixtures__/before.json', '__test__/__fixtures__/after.json'
  ))
    .toBe(fs.readFileSync('__test__/__fixtures__/result.json', 'utf8'));
});
