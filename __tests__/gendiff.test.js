import fs from 'fs';
import gendiff from '../src';

const prefix = '__tests__/__fixtures__/';

[
  { ext: 'ini' }, { ext: 'yaml' }, { ext: 'json' },
  { ext: 'json', nested: true }, { ext: 'json', nested: true }, { ext: 'json', nested: true },
]
  .forEach(({ ext, nested }) => test(`${ext}${nested ? 'Ast' : ''} files are equal`, () => {
    const expected = gendiff(`${prefix}before${nested ? 'Nested' : ''}.${ext}`, `${prefix}after${nested ? 'Nested' : ''}.${ext}`);
    const compared = fs.readFileSync(`${prefix}result${nested ? 'Nested' : ''}`, 'utf8');
    expect(expected).toBe(compared);
  }));

[{ ext: 'ini' }, { ext: 'yaml' }, { ext: 'json' }, { ext: 'json', format: 'Json' }]
  .forEach(({ ext, format = 'Plain' }) => test(`${ext} files with format ${format} are equal`, () => {
    const expected = gendiff(`${prefix}beforeNested.${ext}`, `${prefix}afterNested.${ext}`, format.toLowerCase());
    const compared = fs.readFileSync(`${prefix}result${format}`, 'utf8');
    expect(expected).toBe(compared);
  }));
