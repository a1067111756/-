
exports.getInstance = function (categories, times, origins) {

    var navbar = new Object()
    navbar.times = times
    navbar.origins = origins
    navbar.categories = categories

    return navbar
}
