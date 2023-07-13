const express = require("express")
const app = express()
const port = 9090



app.get("/node", function (req, res) {
    res.send("Hello , Chocolate!");
});


app.get("/codeyourfuture", function (req, res) {
    res.send("Hello , codeyourfuture!");
});

app.get("/chocolate", function (req, res) {
    let amountChoc = req.query.amount;
    res.send(`I want` + " " + amountChoc + " " + `chocolate bars`)
});

app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
});

app.listen(port, () => {
    console.log("Server is listening on port 9090. Ready to accept requests!");
})

