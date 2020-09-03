const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {}

    res.render('home', data)
})

router.get('/menu', (req, res, next) => {
    const data = {}

    res.render('menu', data)
})

router.get('/contact', (req, res, next) => {
    const data = {}

    res.render('contact', data)
})

module.exports = router