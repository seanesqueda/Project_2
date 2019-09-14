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
    isLoggedIn () {
        var token = localStorage.getItem('token')
        if(token) {
            var userData = this.parseToken(token);
            var expirationDate = new Date(userData.exp * 1000)
            if(Date.now() > expirationDate) this.logOut()
        } else {
            window.location.assign('./login.html')
        }
    },
    parseToken (token) {
        return JSON.parse(window.atob(token.split('.')[1]))
    },
    logOut (path = './index.html') {
        localStorage.removeItem('token')
        window.location.assign(path)
    }
}
$(document).ready(function () {
    authHelper.isLoggedIn()
    $(document.body).append('<div>' + JSON.stringify(authHelper.parseToken(localStorage.getItem('token'))) + '</div>')
    myAxios({
        url: '/api/protected',
        method: 'GET'
    })
    .then(function (resp) {
        console.log(resp)
    })
    .catch(function (err) {
        console.log(err)
    })

    $('#logout').on('click', function () {
        authHelper.logOut('./index.html')
    })
})