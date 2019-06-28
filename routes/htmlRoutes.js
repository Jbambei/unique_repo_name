var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/scenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scenario.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/writescenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writescenario.html"));
  });

  app.get("/writeplan", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writeplan.html"));
  });

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
