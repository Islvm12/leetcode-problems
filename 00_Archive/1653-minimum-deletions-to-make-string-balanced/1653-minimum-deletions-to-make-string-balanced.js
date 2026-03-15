/**
 * @param {string} s
 * @return {number}
 */

//The core idea is "try every split point" searching for the one with min deletions  

const minimumDeletions = s => {
    let a = 0, b = 0;
    let deletions = s.length;

    for (const e of s)
        a += (e === 'a');

    for (const e of s) {
        a -= (e === 'a');
        deletions = Math.min(deletions, a + b);
        b += (e === 'b');
    }

    return deletions;
};