import _ from 'lodash';

const makeAst = (obj1, obj2) => {
  const unitedKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  return unitedKeys.map((key) => {
    let result = { name: key, type: 'equal', value: obj1[key] };
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      result = { name: key, type: 'objects', children: makeAst(obj1[key], obj2[key]) };
    } else if (!_.has(obj1, key)) {
      result = { name: key, type: 'added', value: obj2[key] };
    } else if (!_.has(obj2, key)) {
      result = { name: key, type: 'deleted', value: obj1[key] };
    } else if (obj1[key] !== obj2[key]) {
      result = {
        name: key, type: 'updated', value1: obj1[key], value2: obj2[key],
      };
    }
    return result;
  });
};

export default makeAst;
