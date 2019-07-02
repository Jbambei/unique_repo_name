var db = require("../models");

module.exports = function(app) {
  app.get("/api/scenario", function(req, res) {
    db.Scenario.findAll({}).then(function(dbScenario) {
      res.json(dbScenario);
    });
  });
  app.get("/api/scenario/:id", function(req, res) {
    db.Scenario.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbScenario) {
      res.json(dbScenario);
    });
  });
  app.post("/api/scenario", function(req, res) {
    db.Scenario.create(req.body).then(function(dbScenario) {
      res.json(dbScenario);
    });
  });
  app.delete("/api/scenario/:id", function(req, res) {
    db.Scenario.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbScenario) {
      res.json(dbScenario);
    });
  });
  app.put("/api/scenario", function(req, res) {
    db.Scenario.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbScenario) {
      res.json(dbScenario);
    });
  });
};
