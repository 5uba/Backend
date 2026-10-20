let words = "I love javascript";
let result = "";
for (let word = words.length - 1; word >= 0; word--) {
  result = result + words[word];
}
console.log(result);

// let words = "I love javascript";
// let result = "";
// let arr = words.split(" ");
// for (let word = arr.length - 1; word >= 0; word--) {
//   result = result + arr[word] + " ";
// }
// console.log(result.trim());