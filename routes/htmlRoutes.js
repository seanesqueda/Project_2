var db = require("../models");
var path = require("path"); 

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/submit.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/error.html"));
  });
};
