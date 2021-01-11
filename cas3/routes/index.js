var express = require('express');
var router = express.Router();

// simulacija na baze
const players = [{ name: 'Auba', goals_scoored: 5 }, { name: 'Laca', goals_scoored: 10 }]

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Players App',
        players: players
    });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create player' })
});

router.post('/players', (req, res) => {
    req.body = {
        name: 'test',
        goals_scoored: 0
    }
    router.get('/players/:id', (req, res) => {
        // da napiseme kod koj od baza kje go zeme playerot so ova ID: req.params.id
        const player = players.find(player => {
            return player.id == req.params.id
        })

        res.render('edit', { title: 'Update player', player })
    })
    const player = {...req.body, id: players.length + 1 }
    players.push(player)
    res.redirect('/');
    /* isto no po prosto kako gore navedenoto, destrukcija
    const player = req.body;
    player.id = players.length + 1;*/
})
router.get('/players/:id')
    // ROUTE PARAMETERS

module.exports = router;