// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'lastest_new_page_entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

lastestNewPageEntity _$lastestNewPageEntityFromJson(Map<String, dynamic> json) {
  return lastestNewPageEntity(
      json['result'] as String,
      (json['movies'] as List)
          ?.map((e) =>
              e == null ? null : Movies.fromJson(e as Map<String, dynamic>))
          ?.toList());
}

Map<String, dynamic> _$lastestNewPageEntityToJson(
        lastestNewPageEntity instance) =>
    <String, dynamic>{'result': instance.result, 'movies': instance.movies};

Movies _$MoviesFromJson(Map<String, dynamic> json) {
  return Movies(
      json['url'] as String,
      json['title'] as String,
      json['director'] as String,
      (json['actor'] as List)?.map((e) => e as String)?.toList(),
      json['year'] as String,
      json['score'] as String,
      json['summary'] as String,
      json['player'] as String,
      json['poster'] as String);
}

Map<String, dynamic> _$MoviesToJson(Movies instance) => <String, dynamic>{
      'url': instance.url,
      'title': instance.title,
      'director': instance.director,
      'actor': instance.actor,
      'year': instance.year,
      'score': instance.score,
      'summary': instance.summary,
      'player': instance.player,
      'poster': instance.poster
    };
