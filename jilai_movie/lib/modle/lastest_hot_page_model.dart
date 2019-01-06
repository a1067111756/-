import 'package:dio/dio.dart';
import 'package:jilai_movie/modle/entity/lastest_new_page_entity.dart';

class lastestHotPageModel  {

// 或者通过传递一个 `options`来创建dio实例
    Dio dio;
    static Options options= new Options(
        baseUrl:"http://sciascia.cn:3000",
        connectTimeout:5000,
        receiveTimeout:3000
    );

    lastestHotPageModel() {
        dio = new Dio(options);
    }

    Future<lastestNewPageEntity> getSectionModle() async{
        Response response=await dio.get("/box-movie/main-page/wechat-lastesthot");
        lastestNewPageEntity entity = lastestNewPageEntity.fromJson(response.data);
        return entity;
    }

}