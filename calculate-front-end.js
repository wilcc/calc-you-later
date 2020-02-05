// Grab the calculate function from our other file. Imports can be tricky at first, so this one's a gimme!
const calculate = require('./calculate-back-end.js')




// For the following steps, write the code, like the example above, DIRECTLY
// below the comment that describes it.

// That way our comments will describe what the code right under it does.
// Thus providing documentation for future readers. Including yourself!


// Grab the three user inputs from the command line. They'll be in a special
// array that the node environment gives us, called "process.argv"
// let num1 = process.argv[2]
// console.log(num1)
// Arrays are like strings, in that they have something stored at each index.
// But unlike arrays, they don't store single-character strings--instead, they
// can store anything of any length!
// console.log(calculate(num1, '4', '+')_
// In process.argv's case, they store the strings the user types in. The tricky
// thing is that process.argv[0] returns the first thing the user types in,
// which is always "node". Similarly, process.argv[1] returns the second thing
// the user typed, which is the name of the file they wanted to run with node.
// So if we want to get the commands the user wants US to run, those strings
// start at index 2.

// Put the two numbers and the operation into variables so we can feed them into
// our calculate function. We can decide what order the user inputs go in by
// storing the approprate pair of them as the numbers, and the other one as the
// operation. By far the most user-friendly way to store them is to assume
// they're in [number] [operation] [number] order, as in:
// 5 + 5
// 6 minus 4
// 10 X 5


// const num1 = process.argv[2]
// const num2 = process.argv[4]
// const sign = process.argv[3]

// console.log(calculate(num1,num2,sign))



if(process.argv[5]=== undefined){
    const [, ,num1,sign,num2] = process.argv;
    // console.log(process.argv[3])
    console.log(calculate(num1,num2,sign))
    // console.log(process.argv[1]);

} else {

    const sign = process.argv[3] + ' ' + process.argv[4]
    const num1 = process.argv[2]
    const num2 = process.argv[5]
    console.log(calculate(num1,num2,sign))
    
}
// console.log(calculate(num1,num2,sign)) 


// Here we store what's in those process.argv indices in well-named variables.


//As a stretch goal--done after everything else works!--the code below reassigns
// the second number and operation variables to the values held in alternate
// process.argv indices.

// This is to allow for someone to type in two words for operations, like
// "divided by" or "subtracted from". Those two-word operations are
// space-separated, which means node reads them in as separate strings. We first
// have to detect whether those extra strings are in there, though! Several ways
// to do this.

// And we can't forget to put the space back in our two-word operation, as that's how calculate is expecting to receive it!


// Store the return value of our calculate function, making sure to feed it the correct values from our user input.


// Then, print out that return value to the terminal.