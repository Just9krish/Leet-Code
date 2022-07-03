var longestCommonPrefix = function(strs) {
    let prefix = ""
    
    let first = strs[0] 
    for (let i=0; i < first.length; i++){ 
        let char = first[i]; 

        for (let j = 1; j < strs.length; j++){ 
            if(!(strs[j][i] === char)) {                
             return prefix;
            }
        }
        prefix += char;
    }
    
    if(strs === null || strs.length === 0) {
        return prefix;
    }
    return prefix
}