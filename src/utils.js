export default (data, key, dispatcher) => {
  if (!dispatcher[key]) throw new Error(`${key} is an unknown key`);
  return dispatcher[key](data);
};
