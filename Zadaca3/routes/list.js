var express = require('express');
var router = express.Router();
let listGenerate = require('./generate')

/* GET listing. */
router.get('/', function(req, res, next) {
    res.send(listGenerate);
});


module.exports = router;