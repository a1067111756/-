var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

// 模式定义
var MovieSchema = new Schema({
    doctor: String,
    actor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    score: String,
    poster: String,
    year: String,
    pv: {
        type: Number,
        default: 0
    },    
    category: {
        type: ObjectId,
        ref: 'Category'
    },
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
MovieSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
}) 

// 扩展搜索方法
MovieSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .populate({ path: 'category'})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({ _id: id})
            .exec(cb)
    },
    findByName: function (name, cb) {
        return this
            .findOne({ movie_title: name })
            .exec(cb)
    },    
    findByNames: function (name, cb) {
        return this
            .find({ movie_title: name })
            .exec(cb)
    },  
    fetchNumber: function (start, end, cb) {
        return this
            .find({})
            .skip(start)
            .limit(end - start)
            .populate({ path: 'category'})
            .sort('meta.updateAt')
            .exec(cb)
    },
    getTotalCount: function (cb) {
        return this
            .find()
            .countDocuments()
            .exec(cb)
    }, 
    removeOne: function (id, cb) {
        return this
            .remove({ _id: id })
            .exec(cb)
    }
}

module.exports = MovieSchema