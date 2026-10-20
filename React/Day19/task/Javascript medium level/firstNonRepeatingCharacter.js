let str = "aabbcdecd";
let count = {};
for (let num = 0; num < str.length; num++) {
  let char = str[num];
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}
for (let num = 0; num < str.length; num++) {
  if (count[str[num]] === 1) {
    console.log(str[num]);
    break;
  }
}