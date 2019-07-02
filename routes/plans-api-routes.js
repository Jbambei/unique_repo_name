var db = require("../models");

module.exports = function(app) {
  app.get("/api/plans", function(req, res) {
    db.Plans.findAll({}).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
  app.get("/api/plans/:id", function(req, res) {
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
  app.delete("/api/plans/:id", function(req, res) {
    db.Plans.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
  app.put("/api/posts", function(req, res) {
    db.Plans.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });
};
