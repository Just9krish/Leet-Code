var longestCommonPrefix = function(strs) {
    for (i =0; i<strs[0].length; i++){
        for(j = 1; j<strs.length; j++) {
            if(strs[0][i] != strs[j][i]) {
                return strs[0].slice(0,i)
            }
        }
    }
    
    if(strs == null || strs.length == 0) {
        return "";
    }
    return strs[0];
}