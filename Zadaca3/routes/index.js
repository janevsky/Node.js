var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET list page. */
router.get('/', function(req, res, next) {
    res.render('list', { title: 'Express' });
});

/* GET form page. */
router.get('/', function(req, res, next) {
    res.render('form', { title: 'Express' });
});

module.exports = router;