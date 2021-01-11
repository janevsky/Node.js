var express = require('express');
var router = express.Router();
let formGenerate = require('./form')
let fs = require('fs');

fs.readFile('./routes/login.html', function(err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8000);
});

/* GET listing. */
router.get('/', function(req, res, next) {
    res.send(formGenerate);
});



module.exports = router;