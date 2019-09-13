$(document).ready(function () {
    var email = $("email").val().trim();
    var password = $("password").val().trim();
    $("#submit").on("click", function(e) {
        var userInfo = {
            email: email,
            password: password
        }
        // axios.post('/auth/register', userInfo)
        // .then(function () {
        //     window.location.assign("./sign-in.html")
        // })
        // .catch(function (err) {
        //     console.log(err)
        // })
        insertUser(userInfo);
    });
    function insertUser(userData) {
        $.post("/api/user", userData, function() {
            window.location.href = "/login"
        })
          
      }
})