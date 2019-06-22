var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/scenarios", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/scenarios.html"));
  });

  app.get("/view.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/writescenario", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writescenario.html"));
  });

  app.get("/writeplan", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/writeplan.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
