//DEPENDENCIES
const express = require('express');
const router = express.Router();

//INDEX
router.get('/', (req, res) => {
    fetch('https://api.jikan.moe/v4/anime')
    .then((response) => response.json())
    .then((data) => {
        res.render('anime/index.ejs', {
            anime: data,
        })
    });
});

module.exports = router