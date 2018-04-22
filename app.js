const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true });

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(chalk.green(req.method), chalk.blue(req.path));
  next();
});

app.use('/', routes);

app.listen(3000, () => {
  console.log('server listening');
});
