var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId


// 模式定义
var CommentSchema = new mongoose.Schema({
    movie: {
        type: ObjectId,
        ref: 'Movie'
    },
    from: {
        type: ObjectId,
        ref: 'User'     
    },
    replay: [
        {
            from: {type: ObjectId, ref: 'User'}, 
            to:   {type: ObjectId, ref: 'User' }, 
            content: String,
        }
    ],
    to: {
        type: ObjectId,
        ref: 'User'
    },
    content: String,
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
CommentSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
}) 

// 扩展搜索方法
CommentSchema.statics = {
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
}

module.exports = CommentSchema