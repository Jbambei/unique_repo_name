console.log("connected");
$(function() {
  $.ajax("/api/scenario", {
    type: "get"
  }).then(function(data) {
    // console.log(data);
    // console.log(data[0].scenario_title);
    // console.log(data[0].scenario_author);
    // console.log(data[0].scenario_content);
    // console.log(data[0].scenario_image_url);
    // var scenarioTitle = data.scenario_title;
    // var scenarioPicture = data.scenario_image_url;
    // var scenarioDescription = data.scenario_content;
   // var briefDescription = "";
    //for (var i = 0; i < data.length; i++) {
    //  briefDescription = scenarioDescription.slice(0, 300);
    //}
    createScenarioOne()
    createScenarioTwo()
    createScenarioThree()
    for (var i=0; i < data.length; i++){
        console.log(data);
        console.log(data[i].scenario_title);
        console.log(data[i].scenario_author);
        console.log(data[i].scenario_content);
        console.log(data[i].scenario_image_url);
        $("#cardTitleOne").html(data[0].scenario_title);
        $("#cardTitleTwo").html(data[1].scenario_title);
        $("#cardTitleThree").html(data[2].scenario_title);
        $("#cardPictureOne").attr("src", data[0].scenario_image_url);
        $("#cardPictureTwo").attr("src", data[1].scenario_image_url);
        $("#cardPictureThree").attr("src", data[2].scenario_image_url);
        $("#cardTextOne").text(data[0].scenario_content);
        $("#cardTextTwo").text(data[1].scenario_content);
        $("#cardTextThree").text(data[2].scenario_content);
    }
  });
});
function createScenarioOne(){
    var newScenario = $("<section>");
    newScenario.addClass("cardinfo");
    $("#viewAllScenarios").append(newScenario)
    // var lineBreak = $("<br>");
    // newScenario.append(lineBreak);
    var createRow = $("<div>");
    createRow.addClass("row no-gutters");
    newScenario.append(createRow);
    var createColumn = $("<div>");
    createColumn.addClass("col-12 col-sm-6 col-md-6");
    createRow.append(createColumn)
    var createScenarioTitle = $("<h5>");
    createScenarioTitle.attr("id", "cardTitleOne");
    createColumn.append(createScenarioTitle);
    createScenarioTitle.addClass("card-title");
    var createCardBody = $("<div>");
    createCardBody.addClass("card");
    createCardBody.css({
        width: "25rem"
    });
    createScenarioTitle.append(createCardBody);
    var createScenarioPicture = $("<img>");
    createScenarioPicture.addClass("card-img-top");
    createScenarioPicture.attr("id", "cardPictureOne")
    createScenarioPicture.css({
        height: "100px",
        width: "150px",
        src: ""
    });
    createColumn.append(createScenarioPicture);
    var createCardTextColumn = $("<div>");
    createCardTextColumn.addClass("col-6 col-md-6");
    createColumn.after(createCardTextColumn)
    // createCardTextColumn.append(lineBreak);
    // createCardTextColumn.append(lineBreak);
    var cardText = $("<p>");
    cardText.addClass("card-text");
    cardText.attr("id", "cardTextOne");
    createCardTextColumn.append(cardText);
    var scenarioButton = $("<button>");
    scenarioButton.text("View Full Scenario");
    scenarioButton.addClass("btn btn-primary");
    //scenarioButton.anchor("scenario.html");
    createCardTextColumn.append(scenarioButton);
}
function createScenarioTwo(){
    var newScenario = $("<section>");
    newScenario.addClass("cardinfo");
    $("#viewAllScenarios").append(newScenario)
    // var lineBreak = $("<br>");
    // newScenario.append(lineBreak);
    var createRow = $("<div>");
    createRow.addClass("row no-gutters");
    newScenario.append(createRow);
    var createColumn = $("<div>");
    createColumn.addClass("col-12 col-sm-6 col-md-6");
    createRow.append(createColumn)
    var createScenarioTitle = $("<h5>");
    createScenarioTitle.attr("id", "cardTitleTwo");
    createColumn.append(createScenarioTitle);
    createScenarioTitle.addClass("card-title");
    var createCardBody = $("<div>");
    createCardBody.addClass("card");
    createCardBody.css({
        width: "25rem"
    });
    createScenarioTitle.append(createCardBody);
    var createScenarioPicture = $("<img>");
    createScenarioPicture.addClass("card-img-top");
    createScenarioPicture.attr("id", "cardPictureTwo")
    createScenarioPicture.css({
        height: "100px",
        width: "150px",
        src: ""
    });
    createColumn.append(createScenarioPicture);
    var createCardTextColumn = $("<div>");
    createCardTextColumn.addClass("col-6 col-md-6");
    createColumn.after(createCardTextColumn)
    // createCardTextColumn.append(lineBreak);
    // createCardTextColumn.append(lineBreak);
    var cardText = $("<p>");
    cardText.addClass("card-text");
    cardText.attr("id", "cardTextTwo");
    createCardTextColumn.append(cardText);
    var scenarioButton = $("<button>");
    scenarioButton.text("View Full Scenario");
    scenarioButton.addClass("btn btn-primary");
    //scenarioButton.anchor("scenario.html");
    createCardTextColumn.append(scenarioButton);
}
function createScenarioThree(){
    var newScenario = $("<section>");
    newScenario.addClass("cardinfo");
    $("#viewAllScenarios").append(newScenario)
    // var lineBreak = $("<br>");
    // newScenario.append(lineBreak);
    var createRow = $("<div>");
    createRow.addClass("row no-gutters");
    newScenario.append(createRow);
    var createColumn = $("<div>");
    createColumn.addClass("col-12 col-sm-6 col-md-6");
    createRow.append(createColumn)
    var createScenarioTitle = $("<h5>");
    createScenarioTitle.attr("id", "cardTitleThree");
    createColumn.append(createScenarioTitle);
    createScenarioTitle.addClass("card-title");
    var createCardBody = $("<div>");
    createCardBody.addClass("card");
    createCardBody.css({
        width: "25rem"
    });
    createScenarioTitle.append(createCardBody);
    var createScenarioPicture = $("<img>");
    createScenarioPicture.addClass("card-img-top");
    createScenarioPicture.attr("id", "cardPictureThree")
    createScenarioPicture.css({
        height: "100px",
        width: "150px",
        src: ""
    });
    createColumn.append(createScenarioPicture);
    var createCardTextColumn = $("<div>");
    createCardTextColumn.addClass("col-6 col-md-6");
    createColumn.after(createCardTextColumn)
    // createCardTextColumn.append(lineBreak);
    // createCardTextColumn.append(lineBreak);
    var cardText = $("<p>");
    cardText.addClass("card-text");
    cardText.attr("id", "cardTextThree");
    createCardTextColumn.append(cardText);
    var scenarioButton = $("<button>");
    scenarioButton.text("View Full Scenario");
    scenarioButton.addClass("btn btn-primary");
    //scenarioButton.anchor("scenario.html");
    createCardTextColumn.append(scenarioButton);
}
//   $.ajax("/api/scenario", {
//     type: "get"
//   }).then(function(data) {
//     console.log("scenarios " + data);
//     var scenarioTitle = data.scenario_title;
//     var scenarioPicture = data.scenario_image_url;
//     var scenarioDescription = data.scenario_content;
//     var briefDescription = "";
//     for (var i = 0; i < data.length; i++) {
//       briefDescription = scenarioDescription.slice(0, 300);
//     }
//     for (var i = 0; i < 4; i++) {
//       $("#scenarioTitle").text(scenarioTitle);
//       $("#scenarioPicture").attr("src", scenarioPicture);
//       $("#briefDescription").text(briefDescription);
//     }
//   });


