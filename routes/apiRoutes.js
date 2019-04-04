var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

//app.post("/api/yelp", function(req, res) {
    // console.log(req.body.userLocation);
    //axios.get("https://api.yelp.com/v3/businesses/search?location=" + req.body.userLocation,{
      //headers: {'Authorization': "Bearer " + "fwwcFCIz5wi8JTslUMzF7CU53svp7ApM2pe-etytu_6sF32J1VEUsNUx5dVCDw4-fwINnj1wt-EifXxKlTrP4v9kHJ_RKGocD--S75IPpw4ITaM594ql2rQ5WfRVXHYx"}
    //}).then(function(response) {
    // console.log(response.data);  
    //res.json(response.data.businesses[0].name);

    //});
  //});
