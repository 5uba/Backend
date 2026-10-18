let array = [10, 45, 20, 45, 30];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num = 0; num < array.length; num++) {
  if (array[num] > largest) {
    secondLargest = largest;
    largest = array[num];
  } else if (array[num] > secondLargest && array[num] !== largest) {
    secondLargest = array[num];
  }
}
console.log(secondLargest);