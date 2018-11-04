import fs from 'fs';
import gendiff from '../src';

const prefix = '__tests__/__fixtures__/';

test('json files are equal', () => {
  const expectedData = gendiff(`${prefix}before.json`, `${prefix}after.json`);
  const comparedData = fs.readFileSync(`${prefix}result`, 'utf8');
  expect(expectedData).toBe(comparedData);
});

test('yaml files are equal', () => {
  const expectedData = gendiff(`${prefix}before.yaml`, `${prefix}after.yaml`);
  const comparedData = fs.readFileSync(`${prefix}result`, 'utf8');
  expect(expectedData).toBe(comparedData);
});

test('ini files are equal', () => {
  const expectedData = gendiff(`${prefix}before.ini`, `${prefix}after.ini`);
  const comparedData = fs.readFileSync(`${prefix}result`, 'utf8');
  expect(expectedData).toBe(comparedData);
});

test('jsonAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.json`, `${prefix}afterNested.json`);
  const comparedNestedData = fs.readFileSync(`${prefix}resultNested`, 'utf8');
  expect(expectedData).toBe(comparedNestedData);
});

test('yamlAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.yaml`, `${prefix}afterNested.yaml`);
  const comparedNestedData = fs.readFileSync(`${prefix}resultNested`, 'utf8');
  expect(expectedData).toBe(comparedNestedData);
});

test('iniAst files are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.ini`, `${prefix}afterNested.ini`);
  const comparedNestedData = fs.readFileSync(`${prefix}resultNested`, 'utf8');
  expect(expectedData).toBe(comparedNestedData);
});

test('json files with format Plain are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.json`, `${prefix}afterNested.json`, 'plain');
  const comparedPlainFormatData = fs.readFileSync(`${prefix}resultPlain`, 'utf8');
  expect(expectedData).toBe(comparedPlainFormatData);
});

test('yamlAst files with format Plain are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.yaml`, `${prefix}afterNested.yaml`, 'plain');
  const comparedPlainFormatData = fs.readFileSync(`${prefix}resultPlain`, 'utf8');
  expect(expectedData).toBe(comparedPlainFormatData);
});

test('iniAst files with format Plain are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.ini`, `${prefix}afterNested.ini`, 'plain');
  const comparedPlainFormatData = fs.readFileSync(`${prefix}resultPlain`, 'utf8');
  expect(expectedData).toBe(comparedPlainFormatData);
});

test('json files with format Json are equal', () => {
  const expectedData = gendiff(`${prefix}beforeNested.json`, `${prefix}afterNested.json`, 'json');
  const comparedJsonFormatData = fs.readFileSync(`${prefix}resultJson`, 'utf8');
  expect(expectedData).toBe(comparedJsonFormatData);
});
