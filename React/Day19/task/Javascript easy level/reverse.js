let str = "I love JavaScript";
let words = str.split(" ");
let result = [];
for (let i = words.length - 1; i >= 0; i--) {
  result.push(words[i]);
}
console.log(result.join(" "));