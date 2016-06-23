var express = require('express');
var productsManager = require('./products-manager');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());


router.get('/', function (req, res) {
  res.json(productsManager.getAll());
});

router.post('/', function (req, res) {
  productsManager.save(req.body);
  res.sendStatus(201);
});

router.get('/:id', function (req, res) {
  var found = productsManager.get(req.params.id);
  if (found) {
    res.json(found);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;