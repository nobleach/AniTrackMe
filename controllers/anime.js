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

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW
router.get('/:id', (req, res) =>
    fetch(`https://api.jikan.moe/v4/anime/${req.params.id}`)
    .then((response) => response.json())
    .then((data) => {
        res.render('anime/show.ejs', {
            anime: data,
        })
    })
//render show/ make show page
)

module.exports = router