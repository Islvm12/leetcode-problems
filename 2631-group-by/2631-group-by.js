/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let resultsObj = {};
    this.forEach((e, i)=>{
        groupBy=fn(e)
        if(resultsObj.hasOwnProperty(fn(e))){
            resultsObj[fn(e)].push(this[i])
         }else{
            resultsObj[fn(e)] = [this[i]]
        }
    })
    return resultsObj
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */