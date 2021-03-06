import express from 'express';
import bodyParser from 'body-parser';
import jwt from'jsonwebtoken';

import config from 'config';
import db from './db/db';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
