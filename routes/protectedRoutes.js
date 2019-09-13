var express = require('express')
var path = require("path");
var router = express.Router()


router.get("/profile.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
});

router.get("/submit.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/submit.html"));
});

module.exports = router