export default (ast) => {
  const result = JSON.stringify(ast);
  return `${result}\n`;
};
