let string = "banana";
let result = {};
for (let val = 0; val < string.length; val++) {
  let char = string [val];
  if (result[char]) {
    result[char]++;
  } else {
    result[char] = 1;
  }
}
console.log(result);