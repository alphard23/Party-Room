--> DB setup
CREATE DATABASE partyroom_db;

USE partyroom_db;

--> Room owner table

CREATE TABLE room_owner (
  id INT NOT NULL AUTO_INCREMENT,
  owner_name VARCHAR(18) NOT NULL,
  room_name VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

--> Room users table

CREATE TABLE room_users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(18) NOT NULL,
  room_name VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

--> Songs table

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  song_name VARCHAR(18) NOT NULL,
  rating INT,
  PRIMARY KEY (id)
);