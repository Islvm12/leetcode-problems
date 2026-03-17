/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
        let hash1 = {};
        for (let i=0; i < t.length; i++){
            hash1[s[i]] = (hash1[s[i]] || 0) + 1;
            hash1[t[i]] = (hash1[t[i]] || 0) - 1;
        }
        for (let key in hash1){
            if (hash1[key] !== 0) return false
        }
        return true
};