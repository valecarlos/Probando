// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let memo = {}
    let max = 0;
    let maxChar = ''
    for (let char of str){
        memo[char] = memo[char] + 1 || 1;
    }
    for(let char in memo){
        if (memo[char] > max){
            max = memo[char];
            maxChar= char;
        }
    }
    return maxChar;
}

module.exports = maxChar;