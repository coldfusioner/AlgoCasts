// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let mostUsed = '';
    let mostUsedCount = 0;

    // loop over string of characters
    for(let char of str)
    {
        // if this char is defined increment
        if(charMap[char])
        {
            // increment char count
            charMap[char]++;
        } else {
            // set char count to 1
            charMap[char] = 1;
        }

        // or you could do this instead of if statement
        // charMap[char] = charMap[char] +1 || 1;
    }

    // loop over character map object
    for(let char in charMap)
    {
        // if this iteration's char count is greater than the max
        if(charMap[char] > mostUsedCount)
        {
            // set this iteration's char as the winner of most used
            mostUsed = char;

            // get the char count value
            mostUsedCount = charMap[char];
        }
    }

    return mostUsed;
}

module.exports = maxChar;
 