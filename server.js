const express = require('express')
const app = express()

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


app.listen(3000, () => {
    console.log(`Hello! I'm listening on port 3000...`)
});