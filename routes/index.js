var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/voter', function(req, res, next) {
  res.sendFile('voter.html', { root: 'public' });
});

module.exports = router;
