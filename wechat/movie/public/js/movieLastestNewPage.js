
/* 加载index页面数据 */
function requestLastestNewPage() {

    // 没有缓存请求服务器
    var url = 'http://sciascia.cn:3000/box-movie/main-page/wechat-lastestnew'
    var result = null
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async: false,
        success: function (respons) {

            console.log('sssssssssssssssssssssssssssssssssssss')
            if (respons.result == 'success') {
                loadLastestNewPage(respons)
                result = respons
            }
        }
    })

    return result
}


function loadLastestNewPage (data) {
    $.get('/view/movieLastestNewPage.html').success(function (content) {
        // content就为文件data.txt的文本内容了,注意txt文件的编码需要与html文件的编码一致，最好保存成utf-8 
        $(".content_page_wrapper").html(content)

        //解析数据
        // 分类条目
        var $lastestnew_category_item = $('<div class="lastestnew-category-item"></div>')
        var $lastestnew_category_item_title = $('<p class="lastestnew-category-item-title">' + '最新电影' + '</p>')
        var $lastestnew_category_item_image_list = $('<div class="lastestnew-category-item-image-list weui-flex lastestnew-weui-flex"></div>')

        for (const movie of data.movies) {
            var $a = $('<a href="">')
            $a.attr("href", 'http://www.sciascia.cn/weixin/movie-detail?movie_title=' + movie.title)
            var $img = $('<img class="lastestnew_category_item_image" src="" alt="">')
            $img.attr("src", movie.poster)
            $a.append($img.get(0))
            $lastestnew_category_item_image_list.append($a.get(0))
        }

        $lastestnew_category_item.append($lastestnew_category_item_title.get(0))
        $lastestnew_category_item.append($lastestnew_category_item_image_list.get(0))
        $('.lastestnew-items-wrapper').append($lastestnew_category_item.get(0))

    });
}