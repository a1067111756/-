'use strict'

/* 引入模块 */
var Koa = require('koa')
var path = require('path')
var Router = require('koa-router')
var xmlParser = require('koa-xml-body')
var bodyParser = require('koa-bodyparser')
var wexinConnect = require('./wechat/wexinConnect')
var RouterManager = require('./rounte/rounte-manager')

/* 全局对象 */
var app = new Koa()
var router = new Router()

/* 注册中间件 */
app
    .use(xmlParser())
    .use(bodyParser())
    .use(require('koa-static')(path.join(__dirname, './movie/public')))
    .use(router.routes())
    .use(router.allowedMethods())

/* 引入路由管理 */
new RouterManager(router)

/* 开启监听 */
var port = 80
app.listen(port)
console.log('Listening port: %d....', port)