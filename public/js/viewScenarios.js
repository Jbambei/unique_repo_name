$(function() {
  $("#viewAllScenarios").on("load", function(event) {
    $.get("/api/examples", function(data) {
      console.log("scenarios " + data);
      for (var i = 0; i < 4; i++) {}
    });
  });
});
