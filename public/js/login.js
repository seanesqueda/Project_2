$(document).ready(function () {
    $("#submit").on("click", function(e) {
        var userInfo = {
            email: $("#email").val().trim(),
            password: $("#email").val().trim()
        }
        axios.post('/auth/login', userInfo)
        .then(function (resp) {
            console.log(resp)
            localStorage.setItem('token', resp.data.token)
            window.location.assign("./profile.html")
        })
        .catch(function (err) {
            console.log(err)
        })
    })
})