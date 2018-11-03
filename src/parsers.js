import yaml from 'js-yaml';
import ini from 'ini';

const dispatcher = {
  '.ini': ini.parse,
  '.yaml': yaml.safeLoad,
  '.json': JSON.parse,
};

export default (data, ext) => {
  try {
    return dispatcher[ext](data);
  } catch (e) {
    throw new Error(`${ext} is an unknown extension`);
  }
};
