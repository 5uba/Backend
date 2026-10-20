let arr = [1, [2, 3], [4, [5, 6]]];

let result = [];

function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}

flatten(arr);

console.log(result);