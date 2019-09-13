var express = require('express')
var router = express.Router()
var Auth = require('../resources/authResource.js')
var _ = require('lodash')

router.post('/login', function(req, res) {
    var user = _.pick(req.body, ['email', 'password'])
    Auth.login(user)
    .then(function (token) {
        res.json({ token })
    })
    .catch(function (err) {
        console.log(err)
        res.status(400).json({ error: err.toString() })
    })
})

router.post('/register', function(req, res) {
    var user = _.pick(req.body, ['email', 'password'])
    Auth.register(user)
    .then(function () {
        res.json({ message: 'User Created' })
    })
    .catch(function (err) {
        res.status(400).json({ error: err.toString() })
    })
})

module.exports = router