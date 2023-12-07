const cleanSet = (set, startString) => {
  const filtered = Array.from(set)
    .filter((item) => item.startsWith(startString));
  const result = filtered.join('-');
  return result;
};

export default cleanSet;
