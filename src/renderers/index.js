import renderString from './stringRender';
import renderPlain from './plainRender';
import check from '../utils';

const dispatcher = {
  string: renderString,
  plain: renderPlain,
  json: JSON.stringify,
};

export default (ast, format) => check(ast, format, dispatcher);
