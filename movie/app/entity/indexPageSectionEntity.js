/* 首页section数据模型 */


exports.getInstance = function (section_title, movies) {

    var section = new Object()
    section.section_title = section_title
    section.movies = movies

    return section
}

