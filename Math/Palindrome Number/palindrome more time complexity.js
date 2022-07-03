var isPalindrome = function(x) {
  let num = x.toString()

    let result = '';
    
    for (i =num.length-1; i>=0;i--){
        result = result + num[i];
    }
    
    if (result == x) {
        return true;
    } else {
        return false
    }
};