import _ from 'lodash';

const makeAst = (obj1, obj2) => {
  const unitedKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  return unitedKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { name: key, type: 'objects', children: makeAst(obj1[key], obj2[key]) };
    }
    if (!_.has(obj1, key)) {
      return { name: key, type: 'add', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { name: key, type: 'sub', value: obj1[key] };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        name: key, type: 'update', value1: obj1[key], value2: obj2[key],
      };
    }
    return { name: key, type: 'equal', value: obj1[key] };
  });
};

export default makeAst;
