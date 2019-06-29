console.log("connected");
var createScenarioTitle = $("<h5>");
var createScenarioPicture = $("<img>");
var cardText = $("<p>");
$(function() {
  $.ajax("/api/scenario", {
    type: "get"
  }).then(function(data) {
    for (var i=0; i < data.length; i++){
        console.log(data);
        console.log(data[i].scenario_title);
        console.log(data[i].scenario_author);
        console.log(data[i].scenario_content);
        console.log(data[i].scenario_image_url);
        createScenarioOne()
        createScenarioTitle.attr("id", "cardTitle" + data[i].id)
        createScenarioPicture.attr("id", "cardPicture" + data[i].id)
        cardText.attr("id", "cardText" + data[i].id)
        $("#cardTitle" + data[i].id).html(data[i].scenario_title);
        $("#cardPicture" + data[i].id).attr("src", data[i].scenario_image_url);
        $("#cardText" + data[i].id).text(data[i].scenario_content);
    }
  });
});
function createScenarioOne(){
    var newScenario = $("<section>");
    newScenario.addClass("cardinfo");
    $("#viewAllScenarios").append(newScenario)
    var createRow = $("<div>");
    createRow.addClass("row no-gutters");
    newScenario.append(createRow);
    var createColumn = $("<div>");
    createColumn.addClass("col-12 col-sm-6 col-md-6");
    createRow.append(createColumn)
    createScenarioTitle = $("<h5>");
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
    createCardTextColumn.addClass("col-6 col-md-6");
    createColumn.after(createCardTextColumn)
    cardText = $("<p>");
    cardText.addClass("card-text");
    createCardTextColumn.append(cardText);
    var scenarioButton = $("<button>");
    scenarioButton.text("View Full Scenario");
    scenarioButton.addClass("btn btn-primary");
    createCardTextColumn.append(scenarioButton);
}