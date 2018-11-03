import yaml from 'js-yaml';
import ini from 'ini';

export default (file, ext) => {
  switch (ext) {
    case '.ini':
      return ini.parse(file);
    case '.yaml':
      return yaml.safeLoad(file);
    case '.json':
      return JSON.parse(file);
    default:
      return {};
  }
};
