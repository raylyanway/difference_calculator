import fs from 'fs';
import gendiff from '../src';

const prefix = '__tests__/__fixtures__/';
const comparedData = fs.readFileSync(`${prefix}result`, 'utf8');
const comparedNestedData = fs.readFileSync(`${prefix}resultNested`, 'utf8');

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

test('jsonAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.json`, `${prefix}afterNested.json`);
  expect(expectedData).toBe(comparedNestedData);
});

test('yamlAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.yaml`, `${prefix}afterNested.yaml`);
  expect(expectedData).toBe(comparedNestedData);
});

test('iniAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.ini`, `${prefix}afterNested.ini`);
  expect(expectedData).toBe(comparedNestedData);
});
