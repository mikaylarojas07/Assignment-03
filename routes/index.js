//load in express 
let express = require('express');
let router = express.Router();

/* GET splash/landing page. */
//when a user opens the root URL (/), render views/index.ejs
//This is our splash/landing page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TrackIt' });
});

//export the router
module.exports = router;
