// 路由相关
var multipart = require('connect-multiparty')
var User = require('./../app/controllers/user')
var Moive = require('./../app/controllers/movie')
var Comment = require('./../app/controllers/comment')
var Category = require('./../app/controllers/category')
var Admin = require('./../app/controllers/admin')
var CategoryPage = require('./../app/controllers/categoryPage')
var IndexPage = require('./../app/controllers/indexPage')
var NewmoviePage = require('../app/controllers/lastestmoviePage')
var LastestHotPage = require('../app/controllers/lastesthotPage')
var HighscorePage = require('../app/controllers/highscorePage')
var DetailPage = require('./../app/controllers/detailPage')
var ExportApiInterface = require('./../app/controllers/ExportApiInterface')

module.exports = function(app)  {

    // pre handle user
    app.use(function (req, res, next) {
        var _user = req.session.user

        app.locals.user = _user

        return next()
    })


    /* about movie */
    //app.get('/movie/detail/:id', User.adminIsShow, Moive.detail)         // 前台 - 电影详情页
    //app.get('/movie/movie_list', User.adminIsShow, Moive.movie_list)     // 后台 - 电影列表页

    /* admin opreation */
    app.delete('/admin/list', User.signinRequired, User.adminRequired, Moive.movie_delete)             // 后台 - 按钮 - 电影信息录入删除
    app.get('/admin/update/:id', User.signinRequired, User.adminRequired, Moive.movie_update)          // 后台 - 按钮 - 电影信息录入更新
    app.get('/admin/movie', User.signinRequired, User.adminRequired, User.adminIsShow, Moive.admin)    // 后台 - 电影录入页
    app.post('/admin/movie/new', User.signinRequired, User.adminRequired, multipart(), Moive.movie_new)  // 后台 - 按钮 - 电影信息录入新增
    
    /* about user */
    app.get('/user/list', User.signinRequired, User.adminRequired, User.adminIsShow, User.user_list)  // 后台 - 用户列表页面

    /* Comment */
    app.post('/user/comment', User.signinRequired, Comment.save)     // 前台 - 按钮 - 用户评论提交

    /* category */
    app.post('/admin/category-single', User.signinRequired, User.adminRequired, Category.save)                 // 后台 - 按钮 - 分类信息录入保存
    app.get('/admin/category/new', User.signinRequired, User.adminRequired, User.adminIsShow, Category.new)    // 后台 - 分类录入页
    //app.get('/admin/category/list', User.signinRequired, User.adminRequired, User.adminIsShow, Category.list)  // 后台 - 分类列表页
    
    /* search */
    //app.get('/results', User.adminIsShow, Index.search)  // 前台 - 搜索结果页

    /* 豆瓣相关 */
    //app.get('/admin/douban/movie', User.signinRequired, User.adminRequired, Douban.douban_import_movie)               // 后台 - 按钮 - 电影信息录入一键导入 
    //app.get('/admin/douban/category-auto', User.signinRequired, User.adminRequired, Douban.douban_import_category)    // 后台 - 按钮 - 电影分类录入一键导入 
    //app.get('/admin/douban/category-analysis', User.signinRequired, User.adminRequired, Douban.douban_analysis_category_from_data) // 后台 - 按钮 - 电影分类分析 

    // 主页面
    app.get('/box-movie/main-page/movie-index', IndexPage.Entrance)                 // 电影首页
    app.get('/box-movie/main-page/movie-category', CategoryPage.Entrance)           // 电影分类页
    app.get('/box-movie/main-page/movie-latestshow', NewmoviePage.Entrance)         // 最新上映电影页
    app.get('/box-movie/main-page/movie-latesthot', LastestHotPage.Entrance)        // 最近热播电影页
    app.get('/box-movie/main-page/movie-highscore', HighscorePage.Entrance)         // 高分电影页
    app.get('/box-movie/main-page/movie-search', ExportApiInterface.Entrance)               // 搜索结果页  

    // 电影详情页
    app.get('/box-movie/movie-detail/:id', DetailPage.Entrance)

    // 注册登陆页面
    app.get('/box-movie/user/signup', User.signUpEntrance)                     // 用户注册页
    app.post('/box-movie/user/signup-submit', User.signup)                     // 提交注册页面表单信息链接
    app.post('/box-movie/user/signin-submit', User.signin)                     // 提交登录页面表单信息链接
    app.get('/box-movie/user/logout', User.signinRequired, User.logout)        // 按钮 - header用户注销按钮

    // 后台管理页面
    app.get('/box-movie/admin/info-enter', Admin.InfoEnterPage)                               // 后台信息录入页
    app.get('/box-movie/admin/info-enter/category-autoimprot', Admin.CategoryInfoAutoEnter)   // 后台信息录入页 - 分类自动录入链接
    app.post('/box-movie/admin/info-enter/category-handimprot', Admin.CategoryInfoHandEnter)  // 后台信息录入页 - 分类手动录入链接
    app.get('/box-movie/admin/category-list', Admin.CategoryListPage)                         // 后台分类列表页

    // 搜索接口
    app.post('/box-movie/main-page/movie-search', ExportApiInterface.Search)
    app.get('/box-movie/main-page/wechat-index', ExportApiInterface.WechatIndexPage)
    app.get('/box-movie/main-page/wechat-lastestnew', ExportApiInterface.WechatLastestNewPage)
    app.get('/box-movie/main-page/wechat-lastesthot', ExportApiInterface.WechatLastestHotPage)
    app.get('/box-movie/main-page/wechat-highscore', ExportApiInterface.WechatHighScorePage)
    
}

