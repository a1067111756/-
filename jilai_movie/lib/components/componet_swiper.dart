import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:cached_network_image/cached_network_image.dart';


class SwiperPage extends StatefulWidget {

  List<String> imageList = new List();

  SwiperPage(this.imageList);

  @override
  SwiperPageState createState() {
    return SwiperPageState(imageList);
  }
}

class SwiperPageState extends State<SwiperPage> {

  List<String> imageList = new List();

  SwiperPageState(this.imageList);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 170.0,
      child: Swiper(
        itemBuilder: _swiperBuilder,
        itemCount: imageList.length,
        pagination: new SwiperPagination(
            builder: DotSwiperPaginationBuilder(
              color: Colors.black54,
              activeColor: Colors.white,
              activeSize: 7.0,
              size: 5.0,
        )),
        loop: true,
        viewportFraction: 0.8,
        scale: 0.9,
        scrollDirection: Axis.horizontal,
        autoplay: true,
        autoplayDelay: 3000,
        duration: 3000,
        onTap: (index) => print('点击了第$index个'),
      ));
  }

  Widget _swiperBuilder(BuildContext context, int index) {
    //return new Image.asset(imageList[index], fit: BoxFit.fill);

    return Container(
      decoration: BoxDecoration(
          image: DecorationImage(
              image: CachedNetworkImageProvider(imageList[index]),
              fit: BoxFit.fill
          ),
          borderRadius: BorderRadius.all(Radius.circular(5.0))
      ),
    );
  }
}
