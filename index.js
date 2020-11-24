const express = require("express");
const bodyParser = require("body-parser");
//require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to our server!');
});

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});