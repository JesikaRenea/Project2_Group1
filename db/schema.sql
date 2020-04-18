DROP DATABASE IF EXISTS movies_db

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
id INT NOT NULL auto_increment PRIMARY KEY,
title VARCHAR (300) NOT NULL,
releaseDate VARCHAR (140) NOT NULL,
rating VARCHAR (40) NOT NULL,
genre VARCHAR (120) NOT NULL,
favorite BOOLEAN DEFAULT false,
wantToWatch BOOLEAN DEFAULT false
);

