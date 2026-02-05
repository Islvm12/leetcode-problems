/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result=0
    let numArr=Array.from(s, (e,i)=>{
        return e === "I" ? 1 : e === "V" ? 5 : e === "X" ? 10 : e === "L" ? 50 : e === "C" ? 100 : e === "D" ? 500 : e === "M" ? 1000 : ""
    })
    for(let i=0; i<numArr.length; i++){
        if (numArr[i]<numArr[i+1]){
            result += numArr[i+1]-numArr[i];
            i+=1
        }else {
            result += numArr[i]
        }
    }
    return result
};