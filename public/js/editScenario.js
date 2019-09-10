$(function () {

    $.ajax("/api/scenario/" + localStorage.id, {
        type: "get"
    }).then(function (data) {
        // console.log(data);
        // console.log(data.scenario_title);
        // console.log(data.scenario_author);
        // console.log(data.scenario_content);
        $("#scenarioAuthor").val(data.scenario_author);
        $("#scenarioTitle").val(data.scenario_title);
        $("#scenarioStory").val(data.scenario_content);
        $("#scenarioImage").val(data.scenario_image_url);
    });

    $(".newScenario").on("submit", function (event) {
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

        $.ajax("/api/scenario/", localStorage.id, {
            type: "put",
            data: newScenario
        }).then(function () {
            location.pathname = "./view";
        });
    });
});
