/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memorize ={};
    return function(...args) {
        let key = args.join(",")
        if(key in memorize){
            return memorize[key];
        }else {
           memorize[key] = fn(...args);
           return memorize[key];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */