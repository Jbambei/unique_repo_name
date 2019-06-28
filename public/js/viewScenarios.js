console.log("connected");
jQuery(function() {
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
    $.get("/api/scenario", function(data){
        console.log(data);
    })
});
