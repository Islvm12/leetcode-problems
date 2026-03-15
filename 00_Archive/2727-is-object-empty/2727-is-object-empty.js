/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let stringObj= JSON.stringify(obj);
    return stringObj.length>2 ? false : true;
};