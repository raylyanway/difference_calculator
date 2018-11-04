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
  add: (obj, parentName) => `Property '${parentName}${obj.name}' was added with value: ${renderValue(obj.value)}`,
  sub: (obj, parentName) => `Property '${parentName}${obj.name}' was removed`,
  update: (obj, parentName) => `Property '${parentName}${obj.name}' was updated. From ${renderValue(obj.value1)} to ${renderValue(obj.value2)}`,
};

const render = (startAst) => {
  const makeRender = (ast, parentName = '') => {
    const filtered = ast.filter(node => node.type !== 'equal');
    return filtered.map(obj => dispatcher[obj.type](obj, parentName, makeRender));
  };
  const result = _.flatten(makeRender(startAst, '')).join('\n');
  return `${result}\n`;
};

export default render;
