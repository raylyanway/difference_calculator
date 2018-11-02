import yaml from 'js-yaml';

export default (file, ext) => {
  switch (ext) {
    case '.yaml':
      return yaml.safeLoad(file);
    case '.json':
      return JSON.parse(file);
    default:
      return {};
  }
};
