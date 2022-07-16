function largestNumber(arr) {
    return arr.map( (group) => {
        return group.reduce( (previous, current) => {
            return current > previous ? current : previous; 
        });
    });
}



console.log(
    largestNumber([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
    ])
  );