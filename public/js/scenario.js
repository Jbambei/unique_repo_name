console.log("connected");
$(function() {
  $.ajax("/api/scenario/" + localStorage.id, {
    type: "get"
  }).then(function(data) {
    console.log(data);
    console.log(data.scenario_title);
    console.log(data.scenario_author);
    console.log(data.scenario_content);
    $("#fullSceneTitle").html(data.scenario_title);
    $("#fullScenePicture").attr("src", data.scenario_image_url);
    $("#fullSceneDescription").text(data.scenario_content);
  });
});
var planTitle = $("<h5>");
var planDescription = $("<div>");
var planAuthor = $("<div>");
$(function() {
  $.ajax("/api/plans", {
    type: "get"
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id);
      console.log(data[i].plan_title);
      console.log(data[i].plan_author);
      console.log(data[i].plan_content);
      createPlan();
      planTitle.attr("id", "planTitle" + data[i].id);
      planAuthor.attr("id", "planAuthor" + data[i].id);
      planDescription.attr("id", "planDescription" + data[i].id);
      $("#planTitle" + data[i].id).html("Plan Title: " + data[i].plan_title);
      $("#planAuthor" + data[i].id).html("Author: " + data[i].plan_author);
      $("#planDescription" + data[i].id).text(data[i].plan_content);
    }
  });
});

function createPlan() {
  console.log("create me");
  var newPlan = $("<section>");
  newPlan.addClass("cardinfo");
  $("#plansDisplay").append(newPlan);
  var createRow = $("<div>");
  createRow.addClass("row no-gutters");
  newPlan.append(createRow);
  var createColumn = $("<div>");
  createColumn.addClass("col-12 col-sm-9 col-md-9");
  createRow.append(createColumn);
  planTitle = $("<h5>");
  planTitle.addClass("card-title plansForResponse");
  createColumn.append(planTitle);
  planDescription = $("<div>");
  planDescription.addClass("plansForResponse");
  createColumn.append(planDescription);
  var createSecondColumn = $("<div>");
  createSecondColumn.addClass("col-3, col-md-3");
  createRow.append(createSecondColumn);
  planAuthor = $("<div>");
  planAuthor.addClass("plansForResponse");
  createSecondColumn.append(planAuthor);
}
