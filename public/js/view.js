console.log("connected");
var createScenarioTitle = $("<h5>");
var createScenarioPicture = $("<img>");
var cardText = $("<p>");
var scenarioButton = $("<button>");
var anchor = $("<a>")
$(function () {
  $.ajax("/api/scenario", {
    type: "get"
  }).then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var fullDescription = data[i].scenario_content;
      console.log(fullDescription);
      var briefDescription = fullDescription.slice(0, 600);
      console.log(briefDescription);
      console.log(data);
      console.log(data[i].scenario_title);
      console.log(data[i].scenario_author);
      // console.log(data[i].scenario_content);
      console.log(data[i].scenario_image_url);
      createScenario();
      createScenarioTitle.attr("id", "cardTitle" + data[i].id);
      createScenarioPicture.attr("id", "cardPicture" + data[i].id);
      cardText.attr("id", "cardText" + data[i].id);
      scenarioButton.attr("id", "cardButton" + data[i].id);
      scenarioButton.attr("value", data[i].id);
      anchor.attr("id", "anchorId" + data[i].id);
      anchor.attr("href", "/scenario");
      $("#cardTitle" + data[i].id).html(data[i].scenario_title);
      $("#cardPicture" + data[i].id).attr("src", data[i].scenario_image_url);
      $("#cardText" + data[i].id).text(briefDescription);
    };
    $("button").on("click", function () {
      console.log(this)
      var buttonValue = $(this).val();
      console.log(buttonValue)
      localStorage.setItem("id", buttonValue);
    });
  });
});
function createScenario() {
  var newScenario = $("<section>");
  newScenario.addClass("cardinfo animated rollIn");
  newScenario.css({
      padding: "2%"
  })
  $("#viewAllScenarios").append(newScenario)
  var createRow = $("<div>");
  createRow.addClass("row no-gutters");
  newScenario.append(createRow);
  var createColumn = $("<div>");
  createColumn.addClass("col-4 col-sm-4 col-md-4");
  createRow.append(createColumn)
  createScenarioTitle = $("<h5>");
  createScenarioTitle.css({
      "font-size":"36px"
  })
  createColumn.append(createScenarioTitle);
  createScenarioTitle.addClass("card-title");
  var createCardBody = $("<div>");
  createCardBody.addClass("card");
  createCardBody.css({
    width: "25rem"
  });
  createScenarioTitle.append(createCardBody);
  createScenarioPicture = $("<img>");
  createScenarioPicture.addClass("card-img-top");
  createScenarioPicture.css({
    height: "300px",
    width: "300px",
    src: ""
  });
  createColumn.append(createScenarioPicture);
  var createCardTextColumn = $("<div>");
  createCardTextColumn.addClass("col-8 col-md-8");
  createColumn.after(createCardTextColumn)
  cardText = $("<p>");
  cardText.addClass("card-text");
  cardText.css({
      "margin-top": "8%"
  })
  createCardTextColumn.append(cardText);
  anchor = $("<a>");
  scenarioButton = $("<button>");
  scenarioButton.text("View Full Scenario");
  scenarioButton.addClass("btn btn-primary scenarioButton");
  anchor.append(scenarioButton)
  createCardTextColumn.append(anchor);
}
