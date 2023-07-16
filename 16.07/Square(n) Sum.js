function squareSum(numbers) {
  let sum = 0;
  let newArray = numbers.map((el) => el ** 2);
  for (let i = 0; i < newArray.length; i += 1) {
    sum += newArray[i];
  }
  return sum;
}
