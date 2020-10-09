const express = require('express');
const cors = require('cors');
const moment = require('moment')

const data = require('./data.json');

// create server
const server = express();
const port = 4000;

// GET question endpoint
server.get("/api/questions", cors(), (req, res) => {
    res.json(data);
    console.log(`request returned ${moment().format("YYYY-MM-DD")}`);
});

// starting server
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
    console.log(`${moment().format("YYYY-MM-DD")}`);
});