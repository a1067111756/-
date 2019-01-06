
/* 加载index页面数据 */
function requestIndexPage() {

    // 没有缓存请求服务器
    var url = 'http://sciascia.cn:3000/box-movie/main-page/wechat-index'
    var result = null
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function (respons) {

            if (respons.result == 'success') {
                loadIndexPage(respons)
            }

            result =  respons
        }

    })

    return result
}


function loadIndexPage (data) {

    $.get('/view/movieIndexPage.html').success(function (content) {
        // content就为文件data.txt的文本内容了,注意txt文件的编码需要与html文件的编码一致，最好保存成utf-8 
        $(".content_page_wrapper").html(content)

        //解析数据
        //幻灯片
        var $swiper_wrappers = $('<div class="swiper-wrapper"></div>')

        for (const movie of data.swiper) {
            var $swiper_slide = $('<div class="swiper-slide"></div>')
            var $a = $('<a href="">')
            $a.attr("href", 'http://www.sciascia.cn/weixin/movie-detail?movie_title=' + movie.title)
            var $img = $('<img class="index_swiper_slide_image" src="" alt="">')
            $img.attr("src", movie.poster)
            $a.append($img.get(0))
            $swiper_slide.append($a.get(0))
            $swiper_wrappers.append($swiper_slide.get(0))

        }
        $('.index-swiper-container').append($swiper_wrappers.get(0))


        // 分类条目
        for (const section of data.sections) {
            var $index_category_item = $('<div class="index-category-item"></div>')
            var $index_category_item_title = $('<p class="index-category-item-title">' + section.section_title + '</p>')
            var $index_category_item_image_list = $('<div class="index-category-item-image-list weui-flex index-weui-flex"></div>')

            for (const movie of section.movies) {
                var $a = $('<a href="">')
                $a.attr("href", 'http://www.sciascia.cn/weixin/movie-detail?movie_title=' + movie.title)
                var $img = $('<img class="index_category_item_image" src="" alt="">')
                $img.attr("src", movie.poster)
                $a.append($img.get(0))
                $index_category_item_image_list.append($a.get(0))
            }

            $index_category_item.append($index_category_item_title.get(0))
            $index_category_item.append($index_category_item_image_list.get(0))
            $('.index-category-items-wrapper').append($index_category_item.get(0))
        }

        // 幻灯片初始化
        $(".swiper-container").swiper({
            speed: 3000,//播放速度
            autoHeight: true,
            loop: false,
            setWrapperSize: true,
            autoplay:
            {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: '.swiper-pagination',
            effect: 'slide',
        })

    });
}



