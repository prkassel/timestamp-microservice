var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timestamp', function(req, res) {
    res.render('timestamp', {title: 'Time Stamp'});
});

router.get('/timestamp/:query', function(req, res) {
  moment.updateLocale('en', {
    months : [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ]
});
  var query = req.params.query;
  var isnum = /^\d+$/.test(query);
  if (isnum) {
  var unixDate = moment.unix(+query);
  res.json({unix: query, natural: unixDate.format("MMMM Do, YYYY")});
}

else {
  var naturalDate = moment(query, "MM-DD-YYYY");
  res.json({natural: naturalDate});
}
});

module.exports = router;
