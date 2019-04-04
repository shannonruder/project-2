var db = require("../models");

module.exports = function(app) {
  app.post("/api/survey", function(req, res) {
    console.log("submitted survey!")
    // db.Result.create(req.body).then(function(dbResult) {
      res.redirect('/api/result')
    // })
  });
  app.get("/api/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"))
  });

  app.get("/api/result", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"))
  });

  // Create a new example
  app.post("/api/signin", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.redirect('/api/survey')
    })
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
