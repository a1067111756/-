var CACHE_INDEX_PAGE = null
var CACHE_LASTESTNEW_PAGE = null
var CACHE_LASTESTHOT_PAGE = null
var CACHE_HIGHSCORE_PAGE = null

const FLAG_INDEX_PAGE = 1
const FLAG_LASTESTNEW_PAGE = 2
const FLAG_LASTESTHOT_PAGE = 3
const FLAG_HIGHSCORE_PAGE = 4


$(document).ready(function () { 

    //var FLAG_PAGE = FLAG_INDEX_PAGE
    if ($('.flag-index-page').length > 0) {
        FLAG_PAGE = FLAG_INDEX_PAGE
    } else if ($('.flag-lastestnew-page').length > 0) {
        FLAG_PAGE = FLAG_LASTESTNEW_PAGE
    } else if ($('.flag-lastesthot-page').length > 0) {
        FLAG_PAGE = FLAG_LASTESTHOT_PAGE
    } else if ($('.flag-highscore-page').length > 0) {
        FLAG_PAGE = FLAG_HIGHSCORE_PAGE
    } 

    // 初始化页面
    requstAllPage()

    selectedPage(FLAG_PAGE)

    // 设置NarBar监听
    setSwitchPageOnListner()

}); 


// 初始化进入页面
function selectedPage(pageType) {

    // 填充页面
    fillPageContent(pageType)
    

    // 选中narBar状态
    selectedNavBar(pageType)
}


/* 缓存页面信息 */
function saveCachePageInfo(pageType, content) {

    switch (pageType) {
        case FLAG_INDEX_PAGE:
            if (CACHE_INDEX_PAGE == null) {
                CACHE_INDEX_PAGE = content
            }
            break
        case FLAG_LASTESTNEW_PAGE:
            if (CACHE_LASTESTNEW_PAGE == null) {
                CACHE_LASTESTNEW_PAGE = content
            }
            break;
        case FLAG_LASTESTHOT_PAGE:
            if (CACHE_LASTESTHOT_PAGE == null) {
                CACHE_LASTESTHOT_PAGE = content
            }
            break;
        case FLAG_HIGHSCORE_PAGE:
            if (CACHE_HIGHSCORE_PAGE == null) {
                CACHE_HIGHSCORE_PAGE = content
            }
            break;

        default:
            break;
    }

}


function selectedNavBar (pageType) {
    switch (pageType) {
        case FLAG_INDEX_PAGE:
            addRedNavBarPoint($(".navbar_item_index"))
            setNavBarItemTitleSelectedColor($(".navbar_item_index .navbar_item_title"))
            break
        case FLAG_LASTESTNEW_PAGE:
            addRedNavBarPoint($(".navbar_item_lastestnew"))
            setNavBarItemTitleSelectedColor($(".navbar_item_lastestnew .navbar_item_title"))
            break;
        case FLAG_LASTESTHOT_PAGE:
            addRedNavBarPoint($(".navbar_item_lastesthot"))
            setNavBarItemTitleSelectedColor($(".navbar_item_lastesthot .navbar_item_title"))
            break;
        case FLAG_HIGHSCORE_PAGE:
            addRedNavBarPoint($(".navbar_item_highscore"))
            setNavBarItemTitleSelectedColor($(".navbar_item_highscore .navbar_item_title"))
            break;

        default:
            break;
    }
}

function fillPageContent(pageType) {

    switch (pageType) {

        case FLAG_INDEX_PAGE:
            if (CACHE_INDEX_PAGE != null) {
                loadIndexPage(CACHE_INDEX_PAGE)
            } else {
                
                var content = requestIndexPage()
                saveCachePageInfo(FLAG_INDEX_PAGE, content)
            }    
            break;

        case FLAG_LASTESTNEW_PAGE:
            if (CACHE_LASTESTNEW_PAGE != null) {
                loadLastestNewPage(CACHE_LASTESTNEW_PAGE)
            } else {
                var content = requestLastestNewPage()
                saveCachePageInfo(FLAG_LASTESTNEW_PAGE, content)
            }
            break;

        case FLAG_LASTESTHOT_PAGE:
            if (CACHE_LASTESTHOT_PAGE != null) {
                loadLastestHotPage(CACHE_LASTESTHOT_PAGE)
            } else {
                var content = requestLastestHotPage()
                saveCachePageInfo(FLAG_LASTESTHOT_PAGE, content)
            }
            break;
        case FLAG_HIGHSCORE_PAGE:
            if (CACHE_HIGHSCORE_PAGE != null) {
                loadHighScorePage(CACHE_HIGHSCORE_PAGE)
            } else {
                var content = requestHighScorePage()
                saveCachePageInfo(FLAG_HIGHSCORE_PAGE, content)
            }
            break;
            
        default:
            break;   
    }

}



/* 底部导航按钮页面切换 */
function setSwitchPageOnListner() {
    
    $('.navbar_item_index').on('click', function () {

        selectedPage(FLAG_INDEX_PAGE)
    });

    $('.navbar_item_lastestnew').on('click', function () {

        selectedPage(FLAG_LASTESTNEW_PAGE)
    });

    $('.navbar_item_lastesthot').on('click', function () {
        selectedPage(FLAG_LASTESTHOT_PAGE)
    });

    $('.navbar_item_highscore').on('click', function () {

        selectedPage(FLAG_HIGHSCORE_PAGE)
    });
}

/* 移除红点 */
function addRedNavBarPoint (srcNode) {

    // 先移除再添加
    removeNavBarRedPoint()

    var content = '<div  class="navbar_red_point" style="width: 6px; height: 6px; border-radius: 6px; position: absolute;top: 7px;right: 30px; background-color: red"></div>'
    srcNode.prepend(content)
}

/* 添加红点 */
function removeNavBarRedPoint() {
    $(".navbar_red_point").remove()
}

/* 选中字体颜色 */
function setNavBarItemTitleSelectedColor(srcNode) {

    // 先移除再添加
    setNavBarItemTitleDefualtColor()
    srcNode.css('color', '#04BE02')
}

/* 去除字体颜色 */
function setNavBarItemTitleDefualtColor() { 
    $(".navbar_item_title").css('color', '#999999')
}
 

function requstAllPage() {

    saveCachePageInfo(FLAG_LASTESTNEW_PAGE, requestLastestNewPage())
    //saveCachePageInfo(FLAG_LASTESTHOT_PAGE, requestLastestHotPage())
    //saveCachePageInfo(FLAG_HIGHSCORE_PAGE, requestHighScorePage()) 
}
