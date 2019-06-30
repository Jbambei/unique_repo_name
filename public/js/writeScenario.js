/* eslint-disable camelcase */
$(function() {
  $(".newScenario").on("submit", function(event) {
    event.preventDefault();

    if (
      $("#scenarioTitle").val() !== "" &&
      $("#scenarioAuthor").val() !== "" &&
      $("#scenarioStory").val() !== "" &&
      $("#scenarioImage").val() !== ""
    ) {
      var newScenario = {
        scenario_title: $("#scenarioTitle")
          .val()
          .trim(),
        scenario_author: $("#scenarioAuthor")
          .val()
          .trim(),
        scenario_content: $("#scenarioStory")
          .val()
          .trim(),
        scenario_image_url: $("#scenarioImage")
          .val()
          .trim()
      };
    }
    console.log(newScenario);

    $.ajax("/api/scenario", {
      type: "POST",
      data: newScenario
    }).then(function() {
      console.log("Made a new scenario");
      location.pathname = "./view";
    });
  });
});
