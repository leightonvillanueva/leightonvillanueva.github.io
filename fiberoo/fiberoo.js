function fib() {
  const fibArray = [0, 1];
  for (let i = 2; i < 100; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, function (nums) { return (nums.toString()); });
}

console.log(numsToStrings(fib()));

function numEvenNums(numbers) {
  const evens = _.filter(numbers, function (num) { return num % 2 === 0; });
  return evens.length;
}

console.log(numEvenNums(fib()));
