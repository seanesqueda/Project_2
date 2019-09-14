var myAxios = axios.create({
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
myAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        return authHelper.logOut('./index.html')
    }
    else {
        return Promise.reject(error)
    }
})
var authHelper = {
    isLoggedIn() {
        var token = localStorage.getItem('token')
        if (token) {
            var userData = this.parseToken(token);
            var expirationDate = new Date(userData.exp * 1000)
            if (Date.now() > expirationDate) this.logOut()
        } else {
            window.location.assign('./login.html')
        }
    },
    parseToken(token) {
        return JSON.parse(window.atob(token.split('.')[1]))
    },
    logOut(path = './index.html') {
        localStorage.removeItem('token')
        window.location.assign(path)
    }
}

$(document).ready(function () {
    authHelper.isLoggedIn();

    var title = $("#title");
    var body = $("#body");
    var topic = $("#topic");
    var user = 1;

    $("submit").on("click", function (e) {
        e.preventDefault();

        if (!title.val().trim() || !body.val().trim() || !topic.val()) {
            return;
        }

        var newPost = {
            title: title.val().trim(),
            body: body.val().trim(),
            topic: topic.val(),
            UserId: user
        };
        console.log(newPost);
        submitPost(newPost)
    });

    function submitPost(Post) {
        $.post("/api/protected/posts", Post, function () {
            window.location.href = "./profile.html";
        });
    }

});