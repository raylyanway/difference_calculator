import _ from 'lodash';
import fs from 'fs';

export default (file1, file2) => {
  const obj1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
  const obj2 = JSON.parse(fs.readFileSync(file2, 'utf8'));
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
