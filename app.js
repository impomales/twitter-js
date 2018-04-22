const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const app = express();

const data = {
  title: 'An example',
  people: [
    { name: 'Isaias' },
    { name: 'Mark' },
    { name: 'Sarah' }
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true });

app.use((req, res, next) => {
  console.log(chalk.green(req.method), chalk.blue(req.path));
  next();
});

app.get('/', (req, res) => {
  res.render('index', data);
});

app.get('/news', (req, res) => {
  res.send('in other news...\n');
});

app.listen(3000, () => {
  console.log('server listening');
});
