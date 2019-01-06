import 'package:json_annotation/json_annotation.dart';
part 'lastest_new_page_entity.g.dart';


@JsonSerializable()
  class lastestNewPageEntity extends Object {

  @JsonKey(name: 'result')
  String result;

  @JsonKey(name: 'movies')
  List<Movies> movies;

  lastestNewPageEntity(this.result,this.movies,);

  factory lastestNewPageEntity.fromJson(Map<String, dynamic> srcJson) => _$lastestNewPageEntityFromJson(srcJson);

}

  
@JsonSerializable()
  class Movies extends Object {

  @JsonKey(name: 'url')
  String url;

  @JsonKey(name: 'title')
  String title;

  @JsonKey(name: 'director')
  String director;

  @JsonKey(name: 'actor')
  List<String> actor;

  @JsonKey(name: 'year')
  String year;

  @JsonKey(name: 'score')
  String score;

  @JsonKey(name: 'summary')
  String summary;

  @JsonKey(name: 'player')
  String player;

  @JsonKey(name: 'poster')
  String poster;

  Movies(this.url,this.title,this.director,this.actor,this.year,this.score,this.summary,this.player,this.poster,);

  factory Movies.fromJson(Map<String, dynamic> srcJson) => _$MoviesFromJson(srcJson);

}

  
