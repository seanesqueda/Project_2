var db = require("../models");

module.exports = function(app) {
  // User Routes
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      db.User.findAll({
        include: [db.Post]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  });



  // Post Routes
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // app.get("/api/posts", function(req, res) {
  //   var query = {};
  //   if (req.query.User_id) {
  //     query.UserId = req.query.User_id;
  //   }

  //   db.Post.findAll({
  //     where: query,
  //     include: [db.User]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  app.get("/api/posts/topic/:topic", function(req, res) {
    var query = {};
    if (req.query.User_id) {
      query.UserId = req.query.User_id;
    }
    db.Post.findAll({
      where: {
        topic: req.params.topic,
        include: [db.User]
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
