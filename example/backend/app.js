const express = require('express');
const cors = require('cors');
const timerangeAuthMiddleware = require('../../index');
const {port, authmagicUrl} = require('./config.json');
const app = express();

app.use(cors());
app.use(timerangeAuthMiddleware({url: authmagicUrl}));
app.get('/clients', (req, res) => res.send([{name: 'Bob'}, {name: 'Jack'}, {name: 'Oleks'}]));
app.listen(port, () => console.log(`Backend app listening on port ${port}!`));