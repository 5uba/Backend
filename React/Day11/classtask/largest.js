// let array = [90, 60, 45, 34, 25, 67, 70];
// let largest = array[0];
// let secondLargest = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         secondLargest = largest;
//         largest = array[i];
//     }
// }
// console.log("First largest:", largest);
// console.log("Second largest:", secondLargest);

let array = [70, 60, 45, 67, 90];
let largest = array[0];
let secondLargest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
    }
    else if (array[i] > secondLargest && array[i] != largest) {
        secondLargest = array[i];
    }
}
console.log("First largest:", largest);
console.log("Second largest:", secondLargest);