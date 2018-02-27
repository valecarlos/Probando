// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMapA= [];
    const charMapB= [];
    let a = stringA.replace(/[^\w]/g, '').toLowerCase();
    let b = stringB.replace(/[^\w]/g, '').toLowerCase();

    for(let char of a){
        charMapA[char] = charMapA[char] +1 || 1;
    }

    for(let char of b){
        charMapB[char] = charMapB[char] +1 || 1;
    }

    if(Object.keys(charMapA).length != Object.keys(charMapB).length){
        return false
    }
    for(let char in charMapA){
        if (charMapA[char] != charMapB[char]){
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
