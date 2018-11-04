import yaml from 'js-yaml';
import ini from 'ini';

const dispatcher = {
  '.ini': ini.parse,
  '.yaml': yaml.safeLoad,
  '.json': JSON.parse,
};

export default (data, ext) => {
  if (!dispatcher[ext]) throw new Error(`${ext} is an unknown extension`);
  return dispatcher[ext](data);
};
