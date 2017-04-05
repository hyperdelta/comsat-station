var express = require('express');
var path = require('path');
var admin = require('./admin');

var router = express.Router();

// view
router.use('/admin', admin);

// static
router.use('/dist', express.static(path.join(__dirname, '../../dist')));
router.use('/assets', express.static(path.join(__dirname, '../../assets')));


router.get('/', function (req, res){
  res.send("Server alive")
});


module.exports = router;
