import isString from 'lodash.isstring';
import isObject from 'lodash.isobject';
import flatten from 'lodash.flatten';

const renderValue = (value) => {
  if (isObject(value)) {
    return '[complex value]';
  }
  if (isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const dispatcher = {
  objects: (obj, parentName, makeRender) =>
    makeRender(obj.children, `${parentName}${obj.name}.`),
  added: (obj, parentName) =>
    `Property '${parentName}${obj.name}' was added with value: ${renderValue(
      obj.value,
    )}`,
  deleted: (obj, parentName) =>
    `Property '${parentName}${obj.name}' was removed`,
  updated: (obj, parentName) =>
    `Property '${parentName}${obj.name}' was updated. From ${renderValue(
      obj.value1,
    )} to ${renderValue(obj.value2)}`,
};

const render = (ast, parentName = '') => {
  const filtered = ast.filter((node) => node.type !== 'equal');
  const result = filtered.map((obj) =>
    dispatcher[obj.type](obj, parentName, render),
  );
  return flatten(result).join('\n');
};

export default render;
