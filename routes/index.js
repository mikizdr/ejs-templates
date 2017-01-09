var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  var myProducts = [];

  myProducts = appdata.products;

  /*
  appdata.products.forEach(function(item){
    myProducts = myProducts.concat(item.title);
  });
  */

  res.render('index', { 
    title: 'Express',
    navbar: 'default',
    products: myProducts
  });
});

module.exports = router;