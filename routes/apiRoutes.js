var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/horoscopes", function(req, res) {
    db.Likes.findAll({}).then(function(horoscopes) {
      res.json(horoscopes);
    });
  });

  // Create a new example
  app.post("/api/account/", function(req, res) {
    db.Horoscope.create(req.body).then(function(Horoscope) {
      res.json(Horoscope);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
