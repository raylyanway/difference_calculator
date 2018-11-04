import renderString from './renders/stringRender';
import renderPlain from './renders/plainRender';

const dispatcher = {
  string: renderString,
  plain: renderPlain,
};

export default (ast, format) => {
  try {
    return dispatcher[format](ast);
  } catch (e) {
    throw new Error(`${format} is an unknown format`);
  }
};
