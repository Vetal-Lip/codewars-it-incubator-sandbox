function descendingOrder(n) {
  let arrayOfDigits = Array.from(String(n), Number);
  console.log(arrayOfDigits);
  let sortArray = arrayOfDigits.sort(function (a, b) {
    return b - a;
  });
  console.log(sortArray);
  let newNumber = sortArray.join("");
  console.log(newNumber);
  return Number(newNumber);
}
