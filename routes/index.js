const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res) => {
  const tweets = tweetBank.list();
  res.render('index', { tweets, showForm: true });
});

router.get('/users/:name', (req, res) => {
  const name = req.params.name;
  const tweets = tweetBank.find({ name });
  res.render('index', { tweets, showForm: true, name });
});

router.get('/tweets/:id', (req, res) => {
  const id = Number(req.params.id);
  const tweets = tweetBank.find({ id });
  res.render('index', { tweets });
});

router.post('/tweets', (req, res) => {
  const name = req.body.name;
  const text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
