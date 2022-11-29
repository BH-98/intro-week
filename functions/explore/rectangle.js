// Create a function makeRectangle that will print an m by n rectangle of * to the screen

// For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

//  * * *
//  * * *
//  * * *
//  * * *
//  * * *

// You don't need to use loops for this one! :)

function makeRectangle(m, n) {
    const block = "*".repeat(m) + "\n"
    console.log(block.repeat(n))
}
makeRectangle(3,5)