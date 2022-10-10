//great comments explaining what the code is doing
// i added my code with the bonus of bugs in the code, you really should try it out before you look but i added my solution at the bottom of file

const express = require('express')
const app = express()
//adding port variable
//const PORT = 3000
app.get("/", (req,res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href = "/98">Take one down, pass it around.</a>`)
})

app.get("/:numberOfBottles", (req, res) => {
    let numOfBottles = req.params.numberOfBottles
    if(numOfBottles > 0) {
        // subtracting numOfBottles and giving it a link to next numOfBottles in sucession
        res.send(`<h1>${numOfBottles} bottle(s) of beer on the wall</h1>
        <a href = "/${numOfBottles - 1}">Take one down, pass it around</a>`);
    } else {
        // if you run out of bottles, restart back to original
        res.send(`<h1>You ran out of beers! <a href = "/">Go back to the store and start over!</a></h1>`);
    }
})


//don't look if you want to attempt
let randomNum = Math.floor(Math.random() * (0, 99) + 1)
app.get('/', (req, res) => {
    res.send(`
    <h1>99 little bugs in the code</h1>
    <a href='/98'>Take one down, patch it around...</a>
    `)
})
app.get('/:number', (req, res) => {
    let number = parseInt(req.params.number)
    let next = number - 1
    //if number is randomNum send increase params value
    if (number === randomNum) {
        number += 20
        randomNum = Math.floor(Math.random() * (0, 99) + 1)
        res.send(`
            <h1>${number} little bugs in the code.</h1>
            <a href='/${number - 1}'>take one down, pass it around...</a>
        `)
    }
    else if (number > 0)
        res.send(`
            <h1>${number} little bugs in the code.</h1>
            <a href=/${next}>take one down, pass it around...</a>
        `)
    // if number <= 0 send them to start
    else 
        res.send(`
            <h1>All the beer is gone!</h1>
            <a href='/'>Start Over</a>
        `)
})
// end of my code

app.listen(3000, () => {
    console.log(`Hello! I'm listening on port 3000...`)
});