const express = require('express');

const routes = require('./src/routes');
const { logger } = require('./src/utils');

const server = express();

logger('Server instance created');

server.use(routes);

logger('Routes registered');

const port = process.env.PORT || 7777;

server.listen(port, () => {
  logger(`Listening on port ${port}`);
});
