// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // split words at space
    const words = str.split(' ');

    // array to hold capitalized words
    const capitalized = [];

    // loop over words
    for(let word of words) {
        // capitalize first let of the word and add to array
        capitalized.push(word.substr(0, 1).toUpperCase() + word.substr(1));
    }
    // join the words back together separated by a space
    return capitalized.join(' ');
}

module.exports = capitalize;
