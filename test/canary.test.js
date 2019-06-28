/* eslint-disable camelcase */
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/scenarios", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.Example.bulkCreate([
      {
        scenario_title: "First Example",
        scenario_author: "First Description",
        scenario_content: "First Content",
        scenario_image_url:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
        scenario_created_at: "28 June 2019 00:37:40",
        Plans_id: 1
      },
      {
        scenario_title: "Second Example",
        scenario_author: "Second Description",
        scenario_content: "Second Content",
        scenario_image_url:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
        scenario_created_at: "28 June 2019 00:37:40",
        Plans_id: 1
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/scenarios").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            text: "First Example",
            description: "First Description"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            text: "Second Example",
            description: "Second Description"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
