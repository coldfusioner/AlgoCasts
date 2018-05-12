// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // loop from 1 to n
    for(let i = 1; i <= n; i++)
    {
        // if mod 5 and mod 3, print fizzbuzz
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");

        // if mod 3, print fizz
        } else if(i % 3 === 0 ) {
            console.log("fizz");
        
        // if mod 5, print buzz
        } else if(i % 5 === 0 ) {
            console.log("buzz");
            
        // if not mod 3 and not mod 5, print i
        } else {
            console.log(i);
        }
    }

}

module.exports = fizzBuzz;
