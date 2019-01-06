/* indexPage 数据模型 */

import 'package:dio/dio.dart';
import 'package:jilai_movie/modle/entity/index_page_entity.dart';

class IndexPageModel  {

// 或者通过传递一个 `options`来创建dio实例
  Dio dio;
  static Options options= new Options(
      baseUrl:"http://sciascia.cn:3000",
      connectTimeout:5000,
      receiveTimeout:3000
  );

  IndexPageModel() {
    dio = new Dio(options);
  }

  Future<indexPageEntity> getSectionModle() async{
    Response response=await dio.get("/box-movie/main-page/wechat-index");
    indexPageEntity entity = indexPageEntity.fromJson(response.data);
    return entity;
  }

}

