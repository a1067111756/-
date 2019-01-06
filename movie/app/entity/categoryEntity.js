/* 电影类型基本实体类 */

var categoryList = new Array()

exports.getCategoryList = function () {
    return categoryList
}

exports.addCategory = function (category) {
    categoryList.push(category)
}