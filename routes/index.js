let express = require('express');
let router = express.Router();

/* GET splash/landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TrackIt' });
});

module.exports = router;
