require("dotenv").config();
var express = require("express");
var db = require("./models");
// var jwt = require('express-jwt')
// var authenticationRoutes = require('./routes/authRoutes')
// var apiRoutes = require('./routes/protectedRoutes')

var app = express();
var PORT = process.env.PORT || 8080;
// var auth = jwt({
//   secret: process.env.JWT_SECRET
// })
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// app.use('/auth', authenticationRoutes)
// app.use(auth)
// app.use('/api', apiRoutes)

require("./routes/htmlroutes.js")(app);
require("./routes/apiRoutes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ force: process.env.NODE_ENV === 'development' })
.then(function() {
    app.listen(PORT, function() {
        console.log(`APP NOW LISTENING ON PORT: ${PORT}`)
    })
})
.catch(function (err) {
    console.log('Failed to listen: ')
    console.error(err)
})


module.exports = app;
