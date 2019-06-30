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
