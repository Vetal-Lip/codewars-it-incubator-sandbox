function findUniq(arr) {
  // do magic
  let result = arr.filter(
    (el, i, array) => array.indexOf(el) === array.lastIndexOf(el)
  );
  let newNumber = result.join("");
  return Number(newNumber);
}
