function longestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let chars = new Set();
  for (let end = 0; end < str.length; end++) {
    while (chars.has(str[end])) {
      chars.delete(str[start]);
      start++;
    }
    chars.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
console.log(longestSubstring("abcabcbb"));