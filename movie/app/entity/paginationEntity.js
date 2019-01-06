
const DEFUALT_START_PAGE = 0
const DEFUALT_CURRENT_PAGE = 0
const DEFUALT_END_PAGE = 5
const DEFUALT_TOTAL_PAGE = 5


exports.getInstance = function (start_page, current_page, end_page, total_page, base_url) {

    var pagination = new Object()
    pagination.start_page = start_page
    pagination.current_page = current_page
    pagination.end_page = end_page
    pagination.total_page = total_page
    pagination.base_url = base_url

    return pagination
}


exports.getDefualtInstance = function () {

    var pagination = new Object()
    pagination.start_page = DEFUALT_START_PAGE
    pagination.current_page = DEFUALT_CURRENT_PAGE
    pagination.end_page = DEFUALT_END_PAGE
    pagination.total_page = DEFUALT_TOTAL_PAGE

    return pagination
}