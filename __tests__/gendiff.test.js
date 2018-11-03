import fs from 'fs';
import gendiff from '../src';

const prefix = '__tests__/__fixtures__/';
const comparedData = fs.readFileSync(`${prefix}result.json`, 'utf8');

test('json files are equal', () => {
  const expectedData = gendiff(`${prefix}before.json`, `${prefix}after.json`);
  expect(expectedData).toBe(comparedData);
});

test('yaml files are equal', () => {
  const expectedData = gendiff(`${prefix}before.yaml`, `${prefix}after.yaml`);
  expect(expectedData).toBe(comparedData);
});

test('ini files are equal', () => {
  const expectedData = gendiff(`${prefix}before.ini`, `${prefix}after.ini`);
  expect(expectedData).toBe(comparedData);
});
