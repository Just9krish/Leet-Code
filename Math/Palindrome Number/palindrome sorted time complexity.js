var isPalindrome = function(x) {
  let str= '';
    str +=x;
    return str == str.split('').reverse().join('');
};