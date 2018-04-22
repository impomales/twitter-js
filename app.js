const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(chalk.green(req.method), chalk.blue(req.path));
  next();
});

const server = app.listen(3000, () => {
  console.log('server listening');
});

const io = socketio.listen(server);

app.use('/', routes(io));
