import 'package:flutter/material.dart';
import 'package:jilai_movie/modle/index_page_model.dart';
import 'package:jilai_movie/components/componet_swiper.dart';
import 'package:jilai_movie/views/index/indexCategorySection.dart';
import 'package:jilai_movie/modle/entity/index_page_entity.dart';

class IndexPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() => new IndexPageState();

}

class IndexPageState extends State<IndexPage> with AutomaticKeepAliveClientMixin{

  List<String> swiperEntity = new List();
  List<Sections> categoryEntity = new List();

  void initData() async {

    indexPageEntity entity = await IndexPageModel().getSectionModle();
    setState(() {
      // swiper
      for (int i = 0; i < entity.swiper.length; i++) {
        swiperEntity.add(entity.swiper[i].poster);
      }

      // index category item
      entity.sections.forEach((section) {
        categoryEntity.add(section);
      });
    });
  }

  @override
  void initState() {
    super.initState();
    initData();
  }

  @override
  Widget build(BuildContext context) {

    // TODO: implement build
    return new Scaffold(
        appBar: new AppBar(
          title: new Text('首页'),
        ),
        body: new ListView(
          padding: new EdgeInsets.all(20.0),
          children: <Widget>[
            new SwiperPage(swiperEntity),
            new indexCategorySection(categoryEntity)
          ],
        ),
    );
  }

  // TODO: implement wantKeepAlive
  @override
  bool get wantKeepAlive => true;
}