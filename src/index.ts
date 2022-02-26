import express from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

const autoRoutes = require('express-auto-routes')(app);
autoRoutes(join(__dirname, './controllers'));

app.get('/ping', (req, res) => {
res.send('pong');
})

var server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Node Server litening on http://localhost:${process.env.PORT || 5000}`);
})
app.use(express.static('coverage'));

module.exports = { app: app, server }