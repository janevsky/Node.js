var express = require('express');
var router = express.Router();

router

    .get('/', (req, res) => {
    res.render('index', { title: 'Express' });
})

.get('/create', (req, res) => {
        res.render('create')
    })
    .post('/posts', (req, res) => {
        // req.body treba da go zacuvame vo baza
        // = { title: '1h' , content: "xy"}
    });

module.exports = router;