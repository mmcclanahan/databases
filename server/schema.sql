CREATE DATABASE `chat`;
USE `chat`;
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);
CREATE TABLE chatroom (
  id INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50)
);
CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  `message` VARCHAR(280),
  createdAt DATE,
  userId INT,
  chatroomId INT,
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(chatroomId) REFERENCES chatroom(id)
);
CREATE TABLE friends (
  user INT,
  friend INT,
  FOREIGN KEY(user) references users(id),
  FOREIGN KEY(friend) REFERENCES users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

