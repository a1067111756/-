'use strict'

var path = require('path')
var util = require('../libs/util')
var token_file = path.join(__dirname, './token_file.txt')
var ticket_file = path.join(__dirname, './ticket_file.txt')

var api_prifix = 'https://api.weixin.qq.com/cgi-bin/'

var config = {
    wechat: {
        personal: {
            token: 'sciascia',
            appId: 'wxe37fc0c7eae69eda',
            appSecret: '8735d3c636d4dcb98e676b5db025c4d5',
            jsSafeTxt: 'zL2D54B73DUMKRUh'
        },
        accessToken: {
            api: api_prifix + 'token?grant_type=client_credential',
            getAccessToken: function () {
                return util.readFileAysnc(token_file, 'utf-8')
            },
            saveAccessToken: function (data) {
                return util.writeFileAysnc(token_file, data)
            }
        },
        accessJsTicket: {
            api: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
            getAccessTicket: function () {
                return util.readFileAysnc(ticket_file, 'utf-8')
            },
            saveAccessTicket: function (data) {
                return util.writeFileAysnc(ticket_file, data)
            }
        },
        upLoadTempMaterial: {
            api: api_prifix + 'media/upload?',
        },
        upLoadPerpetualMaterial: {
            api_image_content: api_prifix + 'material/add_news?',
            api_inner_image: api_prifix + 'media/uploadimg?',
            api_other_type: api_prifix + 'material/add_material?',
        },
        movieSearch: {
            api_movie_search: 'http://sciascia.cn:3000/box-movie/main-page/movie-search'
        },
        semanticUnderstanding: {
            api_semantic_understanding: 'https://api.weixin.qq.com/semantic/semproxy/search?access_token='
        }
    }
}

module.exports = config