DROP DATABASE IF EXISTS favoritedMovies;

CREATE DATABASE favoritedMovies;

USE favoritedMovies;

CREATE TABLE movies (
id INT NOT NULL auto_increment PRIMARY KEY,
title VARCHAR (300) NOT NULL,
release_year VARCHAR (140) NOT NULL,
rating VARCHAR (40) NOT NULL,
genre VARCHAR (120) NOT NULL,
-- rotten_tomatoes VARCHAR (120) NOT NULL,
favorite BOOLEAN DEFAULT false,
want_to_watch BOOLEAN DEFAULT false
);
