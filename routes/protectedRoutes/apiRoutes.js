var express = require('express')
var router = express.Router()
var db = require("../../models");

router.get('/', function (req, res) {
    res.send('This works')
})

router.post("/posts", function(req, res) {
    console.log(req.body);
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
module.exports = router