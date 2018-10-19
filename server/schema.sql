CREATE DATABASE movie;

USE movie;

CREATE TABLE movielist (

  id int NOT NULL AUTO_INCREMENT,
  title varchar(20) NOT NULL,
  year int NOT NULL,
  rating float NOT NULL,
  overview varchar(200) NOT NULL,
  image varchar(200) NOT NULL,
  watched BOOLEAN NOT NULL,
  PRIMARY KEY (ID)

)
