var db = require("../models");
var axios = require('axios')
var path = require('path')
module.exports = function (app) {

  
  app.post("/api/survey", function (req, res) {
    console.log("submitted survey!")
    // db.Result.create(req.body).then(function(dbResult) {
    res.redirect('/api/result')
    // })
  });
  app.get("/api/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"))
  });

  app.get("/api/result/:zipcode", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"))
    
  });


  // Create a new User 
  app.post("/api/signin", function (req, res) {
    // db.User.create(req.body).then(function (dbUser) {
      res.redirect('/api/survey')
    // })
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    // db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    // });
  });

  // Dylan's adds here - I moved up above last curly bracket
  app.post("/api/yelp", function (req, res) {

    axios.get("https://api.yelp.com/v3/businesses/search?location=" + req.body.userLocation, {
      headers: { 'Authorization': "Bearer " + "fwwcFCIz5wi8JTslUMzF7CU53svp7ApM2pe-etytu_6sF32J1VEUsNUx5dVCDw4-fwINnj1wt-EifXxKlTrP4v9kHJ_RKGocD--S75IPpw4ITaM594ql2rQ5WfRVXHYx" }
    }).then(function (response) {
      console.log(response.data);
      res.json(response.data.businesses[0]);

    });
  });
  
  app.post("/api/movie", function (req, res) {
    var key = 'ecd271091a78c85cce1ead8c535b9916'
    var movieId = Math.round(Math.random() * 1000);
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=` + key)
      .then(function (response) {
        res.json(response.data);
    });
  });
  
};




 


