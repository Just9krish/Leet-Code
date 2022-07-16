function largestNumber(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let arrLargestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > arrLargestNumber) {
        arrLargestNumber = arr[i][j];
      }
    }

    result[i] = arrLargestNumber;
  }

  return result;
}

console.log(
  largestNumber([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
