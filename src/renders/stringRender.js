import _ from 'lodash';

const renderValue = (value, countSpaces) => {
  const indent = ' '.repeat(countSpaces);
  if (_.isObject(value)) {
    const entries = Object.entries(value);
    const result = entries.map((entry) => {
      if (_.isObject(entry[1])) {
        return `${indent}   ${entry[0]}: ${renderValue(entry[1], countSpaces + 3)}`;
      }
      return `${indent}   ${entry[0]}: ${entry[1]}`;
    });
    return `{\n${result}\n${indent}}`;
  }
  return value;
};

const dispatcher = {
  objects: (obj, indent, countSpaces, makeRender) => `${indent}   ${obj.name}: ${makeRender(obj.children, countSpaces + 3)}`,
  add: (obj, indent, countSpaces) => `${indent} + ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  sub: (obj, indent, countSpaces) => `${indent} - ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  update: (obj, indent, countSpaces) => [
    `${indent} - ${obj.name}: ${renderValue(obj.value1, countSpaces + 3)}`,
    `${indent} + ${obj.name}: ${renderValue(obj.value2, countSpaces + 3)}`,
  ],
  equal: (obj, indent, countSpaces) => `${indent}   ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
};

const render = (startAst) => {
  const makeRender = (ast, countSpaces = 0) => {
    const indent = ' '.repeat(countSpaces);
    const result = ast.map(obj => dispatcher[obj.type](obj, indent, countSpaces, makeRender));
    return `{\n${_.flatten(result).join('\n')}\n${indent}}`;
  };
  return `${makeRender(startAst)}\n`;
};

export default render;
