function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
//   console.log(words)
//   console.log(maxLength)

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= maxLength) {
      maxLength = words[i].length;
    //   console.log(words[i])
//   console.log(maxLength)
    }
  }

  return maxLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
