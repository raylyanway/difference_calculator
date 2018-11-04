import _ from 'lodash';

const renderValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const dispatcher = {
  objects: (obj, parentName, makeRender) => makeRender(obj.children, `${parentName}${obj.name}.`),
  addition: (obj, parentName) => `Property '${parentName}${obj.name}' was added with value: ${renderValue(obj.value)}`,
  deletion: (obj, parentName) => `Property '${parentName}${obj.name}' was removed`,
  update: (obj, parentName) => `Property '${parentName}${obj.name}' was updated. From ${renderValue(obj.value1)} to ${renderValue(obj.value2)}`,
};

const render = (ast, parentName = '') => {
  const filtered = ast.filter(node => node.type !== 'equality');
  const result = filtered.map(obj => dispatcher[obj.type](obj, parentName, render));
  return _.flatten(result).join('\n');
};

export default render;
