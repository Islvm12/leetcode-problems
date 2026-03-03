/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0;
    for(let i=0; i<operations.length;i++){
        operations[i] === "--X" || operations[i] === "X--" ? x-=1 : x+=1
    }
    return x
};