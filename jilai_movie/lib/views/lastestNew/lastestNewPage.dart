import 'package:flutter/material.dart';
import 'package:jilai_movie/views/detail/detailPage.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:jilai_movie/modle/lastest_new_page_model.dart';
import 'package:jilai_movie/modle/entity/lastest_new_page_entity.dart';

class LastestNewPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() => new LastestNewPageState();

}

class LastestNewPageState extends State<LastestNewPage> with AutomaticKeepAliveClientMixin{

    List<Movies> movies = new List();

    void initData() async {
        lastestNewPageEntity entity = await lastestNewPageModel().getSectionModle();
        setState(() {
            movies = entity.movies;
        });
    }

    @override
    void initState() {
        super.initState();
        initData();
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

    List<Widget> getSection(movies) {
        List<Widget> Section = new List();
        movies.forEach((movie) {
            Section.add(getMovieItem(movie));
        });

        return Section;
    }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('最新电影'),
      ),
      body: GridView.count(
          crossAxisCount: 3,
          childAspectRatio: 0.74,
          children: getSection(movies),
        )
      );
  }

  // TODO: implement wantKeepAlive
  @override
  bool get wantKeepAlive => true;
}
