const jsonserver = require('json-server');

const serve = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults();

const port = process.env.PORT || 8080;

serve.use(middlewares);
serve.use(router);
serve.listen(port);