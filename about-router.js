var express = require('express');
var router = express.Router();

router.get('/version', function (req, res) {
  res.send('1.1.1');
});

module.exports = router;