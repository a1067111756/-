import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:jilai_movie/modle/entity/index_page_entity.dart';
import 'package:jilai_movie/views/detail/detailPage.dart';


class indexCategorySection extends StatefulWidget {
  List<Sections> sectionEntity = new List();
  indexCategorySection(this.sectionEntity);
  IndexCategorySectionState createState () => new IndexCategorySectionState(sectionEntity);
}

class IndexCategorySectionState extends State<indexCategorySection> {

  List<Sections> sectionEntity = new List();
  List<Widget> categoryWidgets = new List();
  IndexCategorySectionState(this.sectionEntity);

  List<Widget> getCategoryWidget() {

      sectionEntity.forEach((section) {
        categoryWidgets.add(getCategoryItem(section.sectionTitle, section.movies));
      });

      return categoryWidgets;
  }


  @override
  Widget build(BuildContext context) {

    // TODO: implement build
    return new Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: getCategoryWidget()
    );
  }

  Widget getMovieItem(movie) {
    return Container(
      margin: new EdgeInsets.all(8.0),
      child: new GestureDetector(
        onTap:  () {
            Navigator.push(context, new MaterialPageRoute(builder: (context) => new DetailPage(movie)),);
        },
        child: new Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Container(
              width: 200.0,
              height: 150.0,
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: CachedNetworkImageProvider(movie.poster),
                      fit: BoxFit.fill
                  ),
                  borderRadius: BorderRadius.all(Radius.circular(5.0))
              ),
            ),
            new DefaultTextStyle(
                style: new TextStyle(
                  fontSize: 12.0,
                  color: Colors.black,
                ),
                textAlign: TextAlign.left,
                maxLines: 1,
                softWrap: true,
                overflow: TextOverflow.ellipsis,
                child: new Text(movie.title)
            ),
          ],
        ),
      )
    );
  }


  Widget getRowItem(movies) {

    List<Widget> itemWidgets = new List();
    movies.forEach((movie) {
      var item = new Expanded(
        child: getMovieItem(movie),
        flex: 1,
      );
      itemWidgets.add(item);
    });

    return new Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: itemWidgets
    );
  }


  Widget getCategoryItem(itemTitle, movies) {

    return new Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        new Text(
          itemTitle,
          style: new TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.w800,
            fontFamily: 'Roboto',
            letterSpacing: 0.5,
            fontSize: 12.0,
          ),
        ),
        getRowItem(movies.sublist(0, 3)),
        getRowItem(movies.sublist(3, 6)),
        getRowItem(movies.sublist(6, 9)),
      ],
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('第二个页面'),
        backgroundColor: Colors.brown,
      ),
      body: new Center(
        child: new RaisedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: new Text('返回'),
        ),
      ),
    );
  }
}





