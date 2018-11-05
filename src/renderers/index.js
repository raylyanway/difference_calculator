import renderString from './stringRender';
import renderPlain from './plainRender';

const dispatcher = {
  string: renderString,
  plain: renderPlain,
  json: JSON.stringify,
};

export default (ast, format) => {
  if (!dispatcher[format]) throw new Error(`${format} is an unknown format`);
  return dispatcher[format](ast);
};
