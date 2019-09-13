$(document).ready(function () {

    var title = $("#title");
    var body = $("#body");
    var topic = $("#topic");
    var user = $("");

    $("submit").on("click", function () {

        if (!title.val().trim() || !body.val().trim() || !topic.val()) {
            return;
        }

        var newPost = {
            title: title.val().trim(),
            body: body.val().trim(),
            topic: topic.val(),
            UserId: user
        };

        submitPost(newPost)
    });

    function submitPost(Post) {
        $.post("/api/posts/", Post, function () {
            window.location.href = "/profile";
        });
    }

});