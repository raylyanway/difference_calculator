import yaml from 'js-yaml';
import ini from 'ini';
import check from './utils';

const dispatcher = {
  '.ini': ini.parse,
  '.yaml': yaml.load,
  '.json': JSON.parse,
};

export default (data, ext) => check(data, ext, dispatcher);
