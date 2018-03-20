CREATE DATABASE songTunes;

USE songTunes;

CREATE TABLE songTunes(
id int AUTO_INCREMENT,
song_name varchar(50) NOT NULL,
devoured BOOLEAN default false,
date TIMESTAMP,
PRIMARY KEY (id)
);
