var db = require("../models");

module.exports = function(app) {
  app.get("/api/plans", function(req, res) {
    db.Plans.findAll({}).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
  app.get("/api/plan/:id", function(req, res) {
    db.Plans.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
  app.post("/api/plans", function(req, res) {
    db.Plans.create(req.body).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
};
