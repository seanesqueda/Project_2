$(document).ready(function () {

    $("#submit").on("click", function (e) {
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        var passwordConfirm = $("#password-confirm").val().trim();

        if (password.length < 6) {
            e.preventDefault();
        } else if (password !== passwordConfirm) {
            e.preventDefault();
        }

        var userInfo = {
            email: email,
            password: password
        }
        axios.post('/auth/register', userInfo)
            .then(function () {
                window.location.assign("./login.html")
            })
            .catch(function (err) {
                console.log(err)
            })
        //     insertUser(userInfo);
        // });
        // function insertUser(userData) {
        //     $.post("/api/user", userData, function() {
        //         window.location.href = "/login"
        //     })

    });
});