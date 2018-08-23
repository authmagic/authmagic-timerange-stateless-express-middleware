const express = require('express');
const {port} = require('./config.json');
const app = express();

app.use(express.static(__dirname + '/static'));
app.listen(port, () => console.log(`Frontend app listening on port ${port}!`));