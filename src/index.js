import fs from 'fs';
import path from 'path';
import parse from './parsers';
import makeAst from './ast';
import render from './renderers';

export default (file1, file2, format = 'string') => {
  const ext1 = path.extname(file1);
  const ext2 = path.extname(file2);
  const obj1 = parse(fs.readFileSync(file1, 'utf8'), ext1);
  const obj2 = parse(fs.readFileSync(file2, 'utf8'), ext2);
  const ast = makeAst(obj1, obj2);
  return render(ast, format);
};
