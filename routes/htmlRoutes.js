var db = require("../models");
path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
      res.sendFile(path.join(__dirname, "../views/home.html"));
    // });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

  //dylan's work

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../views/survey.html"));
    });
// end dylans

};





