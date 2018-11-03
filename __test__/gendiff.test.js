import fs from 'fs';
import diff from '../src';

// eslint-disable-next-line
test('json files are equal', () => {
  // eslint-disable-next-line
  expect(diff(
    // eslint-disable-next-line
    '__test__/__fixtures__/before.json', '__test__/__fixtures__/after.json'
  ))
    .toBe(fs.readFileSync('__test__/__fixtures__/result.json', 'utf8'));
});

// eslint-disable-next-line
test('yaml files are equal', () => {
  // eslint-disable-next-line
  expect(diff(
    // eslint-disable-next-line
    '__test__/__fixtures__/before.yaml', '__test__/__fixtures__/after.yaml'
  ))
    .toBe(fs.readFileSync('__test__/__fixtures__/result.json', 'utf8'));
});

// eslint-disable-next-line
test('ini files are equal', () => {
  // eslint-disable-next-line
  expect(diff(
    // eslint-disable-next-line
    '__test__/__fixtures__/before.ini', '__test__/__fixtures__/after.ini'
  ))
    .toBe(fs.readFileSync('__test__/__fixtures__/result.json', 'utf8'));
});
