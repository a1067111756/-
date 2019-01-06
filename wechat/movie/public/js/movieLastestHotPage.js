
/* 加载index页面数据 */
function requestLastestHotPage() {

    // 没有缓存请求服务器
    var url = 'http://sciascia.cn:3000/box-movie/main-page/wechat-lastesthot'
    var result = null
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async: false,
        success: function (respons) {
            console.log('sssssssssssssssssssssssssssssssssssss1')
            if (respons.result == 'success') {
                loadLastestHotPage(respons)
                result = respons
            }
        }
    })

    return result
}

function loadLastestHotPage (data) {

    $.get('/view/movieLastestHotPage.html').success(function (content) {
        // content就为文件data.txt的文本内容了,注意txt文件的编码需要与html文件的编码一致，最好保存成utf-8 
        $(".content_page_wrapper").html(content)

        //解析数据
        // 分类条目
        var $lastesthot_category_item = $('<div class="lastesthot-category-item"></div>')
        var $lastesthot_category_item_title = $('<p class="lastesthot-category-item-title">' + '最热电影' + '</p>')
        var $lastesthot_category_item_image_list = $('<div class="lastesthot-category-item-image-list weui-flex lastesthot-weui-flex"></div>')

        for (const movie of data.movies) {
            var $a = $('<a href="">')
            $a.attr("href", 'http://www.sciascia.cn/weixin/movie-detail?movie_title=' + movie.title)
            var $img = $('<img class="lastesthot_category_item_image" src="" alt="">')
            $img.attr("src", movie.poster)
            $a.append($img.get(0))
            $lastesthot_category_item_image_list.append($a.get(0))
        }

        $lastesthot_category_item.append($lastesthot_category_item_title.get(0))
        $lastesthot_category_item.append($lastesthot_category_item_image_list.get(0))
        $('.lastesthot-items-wrapper').append($lastesthot_category_item.get(0))

    });
}
