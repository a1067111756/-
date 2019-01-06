var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10

// 模式定义
var UserSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    password: {
        unique: true,
        type: String
    },
    role: {
        type: Number,        // 0: normal user, 1: verified user, 2: professonal, user >10 admin, >50 super admin
        default: 0
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


// save操作之前执行hash加盐进行对密码的加密
UserSchema.pre('save', function(next) {
    var user = this

    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    // 对密码进行hash加盐处理
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)
            user.password = hash
            next()
        })
    })
}) 

// 实例方法
UserSchema.methods = {
    comparePassword : function(_password, cb) {
        bcrypt.compare(_password, this.password, function(err, isMatch) {
            if (err) return cb(err)

            cb(null, isMatch)
        })
    }
}


// 静态方法
UserSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb)
    },
}

module.exports = UserSchema