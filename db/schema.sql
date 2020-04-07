DROP DATABASE if exists movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE `watchlist` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `watchlist_title` VARCHAR( 255) NOT NULL,
  `already_watched` BOOLEAN DEFAULT false,
  `created_at` DATETIME NOT NULL
  );


CREATE TABLE `watched` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `watched_title` VARCHAR( 255) NOT NULL,
  `already_watched` BOOLEAN DEFAULT true,
  `review` VARCHAR(500),
  `created_at` DATETIME NOT NULL
);


CREATE TABLE `favorites` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `fav_title` VARCHAR( 255) NOT NULL,
  `created_at` DATETIME NOT NULL
);