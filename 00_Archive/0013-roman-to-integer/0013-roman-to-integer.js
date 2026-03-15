var romanToInt = function (s) {
    const romanDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result = 0
    for (let i = 0; i < s.length; i++) {
        let curr = romanDict[s[i]]
        let next = romanDict[s[i + 1]] ?? 0
        result += curr
        if (curr < next) {
            result -= curr * 2
        }
    }
    return result
};