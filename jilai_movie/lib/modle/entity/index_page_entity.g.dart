// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'index_page_entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

indexPageEntity _$indexPageEntityFromJson(Map<String, dynamic> json) {
  return indexPageEntity(
      json['result'] as String,
      (json['swiper'] as List)
          ?.map((e) =>
              e == null ? null : Swiper.fromJson(e as Map<String, dynamic>))
          ?.toList(),
      (json['sections'] as List)
          ?.map((e) =>
              e == null ? null : Sections.fromJson(e as Map<String, dynamic>))
          ?.toList());
}

Map<String, dynamic> _$indexPageEntityToJson(indexPageEntity instance) =>
    <String, dynamic>{
      'result': instance.result,
      'swiper': instance.swiper,
      'sections': instance.sections
    };

Swiper _$SwiperFromJson(Map<String, dynamic> json) {
  return Swiper(
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

Map<String, dynamic> _$SwiperToJson(Swiper instance) => <String, dynamic>{
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

Sections _$SectionsFromJson(Map<String, dynamic> json) {
  return Sections(
      json['section_title'] as String,
      (json['movies'] as List)
          ?.map((e) =>
              e == null ? null : Movies.fromJson(e as Map<String, dynamic>))
          ?.toList());
}

Map<String, dynamic> _$SectionsToJson(Sections instance) => <String, dynamic>{
      'section_title': instance.sectionTitle,
      'movies': instance.movies
    };

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
