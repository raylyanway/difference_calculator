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
  objects: (acc, obj, parentName, makeRender) => {
    const nested = makeRender(obj.value, `${parentName}${obj.name}.`);
    return `${acc}${nested}`;
  },
  add: (acc, obj, parentName) => `${acc}\nProperty '${parentName}${obj.name}' was added with value: ${renderValue(obj.value)}`,
  sub: (acc, obj, parentName) => `${acc}\nProperty '${parentName}${obj.name}' was removed`,
  update: (acc, obj, parentName) => `${acc}\nProperty '${parentName}${obj.name}' was updated. From ${renderValue(obj.value1)} to ${renderValue(obj.value2)}`,
  equal: acc => `${acc}`,
};

const render = (startAst) => {
  const makeRender = (ast, parentName = '') => {
    const result = ast.reduce((acc, obj) => {
      const res = dispatcher[obj.type](acc, obj, parentName, makeRender);
      return res;
    }, '');
    return result;
  };
  return `${makeRender(startAst).trim()}\n`;
};

export default render;
