var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cache.has(key) && this.cache.get(key).duration >= Date.now()){
        this.cache.set(key,{"value": value, "duration": Date.now() + duration});
        return true;
    }else{
        this.cache.set(key,{"value": value, "duration": Date.now() + duration});
        return false;
    };
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    // return this.cache.has(key) ? this.cache.get(key).value : -1;
    if(this.cache.has(key) && this.cache.get(key).duration >= Date.now()){
        return this.cache.get(key).value;
    }else{
        this.cache.delete(key)
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for (const [key, entry] of this.cache.entries()) {
        if (entry.duration > Date.now()) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */