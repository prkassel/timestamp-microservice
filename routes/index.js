var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timestamp/:query', function(req, res) {
  var query = req.params.query;
  var isnum = /^\d+$/.test(query);
  if (isnum) {
  var unixDate = moment.unix(+query);
  res.json({unix: query, natural: unixDate.format("MMMM Do, YYYY")});
}

else {
  var stringDate = moment(query, ['MM-DD-YYYY', 'DD-MM-YYYY', 'MMMMDDY', 'DDMMMMY']);
  var naturalDate = stringDate.format('MMMM Do, YYYY');
  unixDate = moment(stringDate).unix();
  res.json({natural: naturalDate, unix: unixDate});
}
});

module.exports = router;
