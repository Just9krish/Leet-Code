var twoSum = function(nums, target) {
   for (let i= 0; i < nums.length - 1; i++) {
       for ( let j =i + 1; j < nums.length; j++) {
           let sum = nums[i] + nums[j]
           if (target === sum) {
               return [i,j]
           } 
       }
   } 
};