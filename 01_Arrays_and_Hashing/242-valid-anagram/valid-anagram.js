/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
        let hash1 = {};
        let hash2 = {};
        for (let i=0; i < t.length; i++){
            hash1[s[i]] ? hash1[s[i]] += 1 : hash1[s[i]] = 1
            hash2[t[i]] ? hash2[t[i]] += 1 : hash2[t[i]] = 1
        }
        for (let key in hash1){
            if (hash1[key] !== hash2[key]) return false
        }
        return true
};