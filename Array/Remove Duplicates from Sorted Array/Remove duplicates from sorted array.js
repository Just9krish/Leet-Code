var removeDuplicates = function (nums) {
  let leftValue = 1;

  for (let rightValue = 1; rightValue < nums.length; rightValue++) {
    if (nums[rightValue] != nums[rightValue - 1]) {
      nums[leftValue] = nums[rightValue];
      leftValue += 1;
    }
  }
  return leftValue;
};

console.log(removeDuplicates([1, 2, 2]));
