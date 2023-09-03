const reverseSeq = (n) => {
  const array = [];
  if (n > 0) {
    for (n; n > 0; n--) {
      array.push(n);
    }
  }
  return array;
};
