import 'package:json_annotation/json_annotation.dart';

part 'index_page_entity.g.dart';


@JsonSerializable()
  class indexPageEntity{

  @JsonKey(name: 'result')
  String result;

  @JsonKey(name: 'swiper')
  List<Swiper> swiper;

  @JsonKey(name: 'sections')
  List<Sections> sections;

  indexPageEntity(this.result,this.swiper,this.sections,);

  factory indexPageEntity.fromJson(Map<String, dynamic> srcJson) => _$indexPageEntityFromJson(srcJson);

}

  
@JsonSerializable()
  class Swiper {

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

  Swiper(this.url,this.title,this.director,this.actor,this.year,this.score,this.summary,this.player,this.poster,);

  factory Swiper.fromJson(Map<String, dynamic> srcJson) => _$SwiperFromJson(srcJson);

}

  
@JsonSerializable()
  class Sections {

  @JsonKey(name: 'section_title')
  String sectionTitle;

  @JsonKey(name: 'movies')
  List<Movies> movies;

  Sections(this.sectionTitle,this.movies,);

  factory Sections.fromJson(Map<String, dynamic> srcJson) => _$SectionsFromJson(srcJson);

}

  
@JsonSerializable()
  class Movies{

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

  
