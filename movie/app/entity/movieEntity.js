/* 电影基本实体类 */

exports.getInstance = function (url, title, director, actor, year, score, summary,
    player, poster, country, language) {

    var movie = new Object()    

    movie.url = url 
    movie.title = title
    movie.director = director
    movie.actor = actor
    movie.year = year
    movie.score = score
    movie.summary = summary
    movie.player = player
    movie.poster = poster
    movie.country = country
    movie.language = language
    
    return movie
}





