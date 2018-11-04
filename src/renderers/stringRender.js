import _ from 'lodash';

const renderValue = (value, countSpaces) => {
  const indent = ' '.repeat(countSpaces);
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.entries(value);
  const result = entries.map(([objectName, objectValue]) => {
    if (_.isObject(objectValue)) {
      return `${indent}   ${objectName}: ${renderValue(objectValue, countSpaces + 3)}`;
    }
    return `${indent}   ${objectName}: ${objectValue}`;
  });
  return `{\n${result}\n${indent}}`;
};

const dispatcher = {
  objects: (obj, indent, countSpaces, makeRender) => `${indent}   ${obj.name}: ${makeRender(obj.children, countSpaces + 3)}`,
  addition: (obj, indent, countSpaces) => `${indent} + ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  deletion: (obj, indent, countSpaces) => `${indent} - ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
  update: (obj, indent, countSpaces) => [
    `${indent} - ${obj.name}: ${renderValue(obj.value1, countSpaces + 3)}`,
    `${indent} + ${obj.name}: ${renderValue(obj.value2, countSpaces + 3)}`,
  ],
  equality: (obj, indent, countSpaces) => `${indent}   ${obj.name}: ${renderValue(obj.value, countSpaces + 3)}`,
};

const render = (ast, countSpaces = 0) => {
  const indent = ' '.repeat(countSpaces);
  const result = ast.map(obj => dispatcher[obj.type](obj, indent, countSpaces, render));
  return `{\n${_.flatten(result).join('\n')}\n${indent}}`;
};

export default render;
