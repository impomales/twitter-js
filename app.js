const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const app = express();

app.use((req, res, next) => {
  console.log(chalk.green(req.method), chalk.blue(req.path));
  next();
});

app.get('/', (req, res) => {
  res.send('hello world!\n');
});

app.get('/news', (req, res) => {
  res.send('in other news...\n');
});

app.listen(3000, () => {
  console.log('server listening');
});
