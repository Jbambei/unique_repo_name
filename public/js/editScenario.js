$(function () {

    let id = localStorage.id;

    $.ajax("/api/scenario/" + localStorage.id, {
        type: "get"
    }).then(function (data) {
        $("#scenarioAuthor").val(data.scenario_author);
        $("#scenarioTitle").val(data.scenario_title);
        $("#scenarioStory").val(data.scenario_content);
        $("#scenarioImage").val(data.scenario_image_url);
    });

    $(".scenarioEdit").on("submit", function (event) {
        event.preventDefault();
        if (
            $("#scenarioTitle").val() !== "" &&
            $("#scenarioAuthor").val() !== "" &&
            $("#scenarioStory").val() !== "" &&
            $("#scenarioImage").val() !== ""
        ) {
            var scenarioEdit = {
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
            scenarioEdit.id = id;
            update(scenarioEdit);
        }
    });

    function update(scenarioEdit) {
        $.ajax("/api/scenario/", {
            type: "put",
            data: scenarioEdit,
        }).then(function () {
            location.pathname = "./view";
        });
    }
});
