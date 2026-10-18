let numbers = [1, 2, 2, 3, 4, 4, 5];
let result = [];
for (let z = 0; z < numbers.length; z++) {
  if (!result.includes(numbers[z])) {
    result.push(numbers[z]);
  }
}
console.log(result);