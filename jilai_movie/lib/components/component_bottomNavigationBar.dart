import 'package:flutter/material.dart';


/*
class BottomNavigationWidget extends StatefulWidget {

  List<Widget> bottomNavigationItemList = List();

  BottomNavigationWidget(this.bottomNavigationItemList);

  @override
  BottomNavigationWidgetState createState() => new BottomNavigationWidgetState(bottomNavigationItemList);
}

class BottomNavigationWidgetState extends State<BottomNavigationWidget>{

  var navBarTitles;
  var navBarIcons;
  int _currentIndex = 0;
  final TAB_IMAGE_WIDTH_AND_HEIGHT = 20.0;
  List<Widget> bottomNavigationItemList = List();

  BottomNavigationWidgetState(this.bottomNavigationItemList);

  /*
   * 根据image路径获取图片
   * 这个图片的路径需要在 pubspec.yaml 中去定义
   */

  Image getTabImage(path) {
    return new Image.asset(path, width: TAB_IMAGE_WIDTH_AND_HEIGHT, height: TAB_IMAGE_WIDTH_AND_HEIGHT);
  }

  /*
   * 获取bottomTab的颜色和文字
   */
  Text getTabTitle(int index) {
    if (index == _currentIndex) {
      return new Text(navBarTitles[index],
          style: new TextStyle(color: const Color(0xff63ca6c)));
    } else {
      return new Text(navBarTitles[index],
          style: new TextStyle(color: const Color(0xff888888)));
    }
  }


  /* 初始化数据 */

  void initData() {
    navBarTitles = ['首页', '最新', '最热', '高分'];
    navBarIcons = [
      getTabImage('assets/images/icon_navbar_heimao.png'),
      getTabImage('assets/images/icon_navbar_jiangshi.png'),
      getTabImage('assets/images/icon_navbar_youlin.png'),
      getTabImage('assets/images/icon_navbar_zhenzi.png'),
    ];
  }


  @override
  Widget build(BuildContext context) {

    initData();

    // TODO: implement build
    return Scaffold(
      body: bottomNavigationItemList[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: navBarIcons[0],
            title: getTabTitle(0)
          ),
          BottomNavigationBarItem(
            icon: navBarIcons[1],
            title: getTabTitle(1)
          ),
          BottomNavigationBarItem(
            icon: navBarIcons[2],
            title: getTabTitle(2)
          ),
          BottomNavigationBarItem(
            icon: navBarIcons[3],
            title: getTabTitle(3)
          ),
        ],
        currentIndex: _currentIndex,
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
        type: BottomNavigationBarType.fixed
      ),
    );
  }

}
*/

class BottomNavigationWidget extends StatefulWidget {

    List<Widget> bottomNavigationItemList = List();

    BottomNavigationWidget(this.bottomNavigationItemList);

    @override
    BottomNavigationWidgetState createState() => BottomNavigationWidgetState(bottomNavigationItemList);
}

class BottomNavigationWidgetState extends State<BottomNavigationWidget>
    with SingleTickerProviderStateMixin {

    var navBarTitles;
    var navBarIcons;
    int _currentIndex = 0;
    final TAB_IMAGE_WIDTH_AND_HEIGHT = 20.0;
    List<Widget> bottomNavigationItemList = List();
    var _controller = PageController(
        initialPage: 0,
    );

    BottomNavigationWidgetState(this.bottomNavigationItemList);

    void initData() {
        navBarTitles = ['首页', '最新', '最热', '高分'];
        navBarIcons = [
            getTabImage('assets/images/icon_navbar_heimao.png'),
            getTabImage('assets/images/icon_navbar_jiangshi.png'),
            getTabImage('assets/images/icon_navbar_youlin.png'),
            getTabImage('assets/images/icon_navbar_zhenzi.png'),
        ];
    }

    /*
   * 根据image路径获取图片
   * 这个图片的路径需要在 pubspec.yaml 中去定义
   */

    Image getTabImage(path) {
        return new Image.asset(path, width: TAB_IMAGE_WIDTH_AND_HEIGHT, height: TAB_IMAGE_WIDTH_AND_HEIGHT);
    }

    /*
   * 获取bottomTab的颜色和文字
   */
    Text getTabTitle(int index) {
        if (index == _currentIndex) {
            return new Text(navBarTitles[index],
                style: new TextStyle(color: const Color(0xff63ca6c)));
        } else {
            return new Text(navBarTitles[index],
                style: new TextStyle(color: const Color(0xff888888)));
        }
    }

    @override
    void dispose() {
        super.dispose();
        _controller.dispose();
    }

    @override
    Widget build(BuildContext context) {
        initData();
        return Scaffold(
            body: PageView(
                controller: _controller,
                children: bottomNavigationItemList,
                physics: NeverScrollableScrollPhysics(),
            ),
            bottomNavigationBar: BottomNavigationBar(
                currentIndex: _currentIndex,
//          onTap: (index)=> _controller.animateToPage(index, duration: Duration(milliseconds: 500), curve: Curves.fastOutSlowIn),
                onTap: (index) {
                    _controller.jumpToPage(index);
                    setState(() {
                        _currentIndex = index;
                    });
                },
                type: BottomNavigationBarType.fixed,
                items: [
                    BottomNavigationBarItem(
                        icon: navBarIcons[0],
                        title: getTabTitle(0)
                    ),
                    BottomNavigationBarItem(
                        icon: navBarIcons[1],
                        title: getTabTitle(1)
                    ),
                    BottomNavigationBarItem(
                        icon: navBarIcons[2],
                        title: getTabTitle(2)
                    ),
                    BottomNavigationBarItem(
                        icon: navBarIcons[3],
                        title: getTabTitle(3)
                    ),
                ],
            ),
        );
    }
}