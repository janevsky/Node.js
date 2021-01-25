var express = require('express');
var router = express.Router();

// simulacija na baza
const players = []

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Players App', players });
      })
      .get('/create', (req, res) => {
        res.render('create', { title: 'Create player' })
      })
      .get('/players/:id', (req, res) => {
        const player = players.find(player => player.id == req.params.id)

        res.render('edit', { title: 'Update player', player })
      })
      .post('/players', (req, res) => {
        const player = { ...req.body, id: players.length + 1 }
        players.push(player)
        res.redirect('/')
      })

module.exports = router;
