var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index"));
  });

  // Load example page and pass in an example by id
  app.get("/scenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scenario.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/writeScenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writeScenario.html"));
  });

  app.get("/writePlan", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writePlan.html"));
  });

  app.get("/editScenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/editScenario.html"));
  });

  // app.get("/scenario", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/scenario.html/:id"));
  // });

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
