import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers';

export default (file1, file2) => {
  const ext1 = path.extname(file1);
  const ext2 = path.extname(file2);
  const obj1 = parse(fs.readFileSync(file1, 'utf8'), ext1);
  const obj2 = parse(fs.readFileSync(file2, 'utf8'), ext2);
  const merge = { ...obj1, ...obj2 };
  const result = Object.keys(merge).reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      return `${acc}\n + ${key}: ${merge[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `${acc}\n - ${key}: ${merge[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `${acc}\n - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}`;
    }
    return `${acc}\n   ${key}: ${merge[key]}`;
  }, '');
  return `{${result}\n}\n`;
};
