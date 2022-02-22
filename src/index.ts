import express from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

const PORT = 3000

const autoRoutes = require('express-auto-routes')(app);
autoRoutes(join(__dirname, './controllers'));

app.get('/ping', (req, res) => {
res.send('pong');
})

var server = app.listen(PORT, () => {
    console.log(`Node Server litening on http://localhost:${PORT}`);
})
app.use(express.static('coverage'));

module.exports = { app: app, server }