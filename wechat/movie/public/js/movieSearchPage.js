/* 搜索页 */

var fs = require('fs')
var path = require('path')

const fpath = path.join(__dirname, '../view/movieSearchPage.html')


exports.Entrance = async (ctx) => {
    ctx.response.body = fs.readFileSync(fpath, 'utf-8') 
}