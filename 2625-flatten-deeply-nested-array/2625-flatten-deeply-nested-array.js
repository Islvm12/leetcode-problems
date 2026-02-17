/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    // let flatArray = [...arr];
    // let temp = [];
    //    while(n){
    //     temp = [];
    //         flatArray.forEach((e,i)=>{
    //          if(Array.isArray(e)){
    //             temp.push(...e)
    //          }else{
    //             temp.push(e)
    //          }
    //         })
    //         flatArray = temp
    //         n--
    //     }
    // return flatArray;

    let stack = [...arr.map(item=> [item, depth])];
    let result = [];

    while(stack.length > 0){
        const [item, depth] = stack.pop();
        if(Array.isArray(item) && depth > 0){
            stack.push(...item.map(item=>[item, depth - 1]));
        }else{
            result.push(item);
        };
    }
    return result.reverse();
};