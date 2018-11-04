import renderString from './renders/stringRender';
import renderPlain from './renders/plainRender';
import renderJson from './renders/jsonRender';

const dispatcher = {
  string: renderString,
  plain: renderPlain,
  json: renderJson,
};

export default (ast, format) => {
  console.log(format);
  try {
    return dispatcher[format](ast);
  } catch (e) {
    throw new Error(`${format} is an unknown format`);
  }
};
