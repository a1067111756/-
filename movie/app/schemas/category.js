var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

// 模式定义
var CategorySchema = new mongoose.Schema({
    name: String,
    movies: [
        {
            type: ObjectId,
            ref: 'Movie'
        }
    ],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()           
        }
    }
})

// save操作之前执行
CategorySchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
}) 

// 扩展搜索方法
CategorySchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    },
    findByName: function (name, cb) {
        return this
            .findOne({ name: name })
            .exec(cb)
    },  
    findAllCategory: function (cb) {
        return this
            .find({}, {'name': 1})
            .exec(cb)
    }, 
    getMoviesByCategoryLimitNum: function (queryParams, start, end, cb) {

        var category = {}
        if (queryParams.category != '全部' && typeof(queryParams.category) != 'undefined') {
            var category = { name: queryParams.category}
        }

        var match = {}
        if (queryParams.time != '全部' && typeof(queryParams.time) != 'undefined') {
            match.movie_time = queryParams.time
        }


        if (queryParams.score != '全部' && typeof(queryParams.score) != 'undefined') {
            match.movie_score = { $gt: queryParams.score }
        }

        var options = {}
        options.skip = start
        options.limit = end - start
        
        return this
            .find(category)
            .populate({
                path: 'movies',
                match: match, 
                options: options
            })
            .exec(cb)
    },
}

module.exports = CategorySchema