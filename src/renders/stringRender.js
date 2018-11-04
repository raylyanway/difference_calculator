import _ from 'lodash';

const renderValue = (value, countSpaces) => {
  const indent = ' '.repeat(countSpaces);
  if (_.isObject(value)) {
    const entries = Object.entries(value);
    const result = entries.reduce((acc, entry) => {
      if (_.isObject(entry[1])) {
        return `${acc}\n${indent}   ${entry[0]}: ${renderValue(entry[1], countSpaces + 3)}`;
      }
      return `${acc}\n${indent}   ${entry[0]}: ${entry[1]}`;
    }, '');
    return `{${result}\n${indent}}`;
  }
  return value;
};

const dispatcher = {
  objects: (acc, obj, indent, countSpaces, makeRender) => `${acc}\n${indent}   ${obj.name}: ${makeRender(obj.children, countSpaces + 3)}`,
  add: (acc, obj, indent, countSpaces) => `${acc}\n${indent} + ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  sub: (acc, obj, indent, countSpaces) => `${acc}\n${indent} - ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  update: (acc, obj, indent, countSpaces) => `${acc}\n${indent} - ${obj.name}: ${renderValue(obj.value1, countSpaces + 3)}\n${indent} + ${obj.name}: ${renderValue(obj.value2, countSpaces + 3)}`,
  equal: (acc, obj, indent, countSpaces) => `${acc}\n${indent}   ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
};

const render = (startAst) => {
  const makeRender = (ast, countSpaces = 0) => {
    const indent = ' '.repeat(countSpaces);
    const result = ast.reduce((acc, obj) => dispatcher[obj.type](acc, obj, indent, countSpaces, makeRender), '');
    return `{${result}\n${indent}}`;
  };
  return `${makeRender(startAst)}\n`;
};

export default render;
