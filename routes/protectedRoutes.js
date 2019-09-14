var express = require('express')
var secretRoutes = require('./protectedRoutes/apiRoutes')
var router = express.Router()

router.use('/protected', secretRoutes)

module.exports = router