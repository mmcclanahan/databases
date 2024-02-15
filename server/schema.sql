CREATE DATABASE chat;
USE chat;
/*
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS chatroom;
DROP TABLE IF EXISTS friends;
*/
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(20)
);
CREATE TABLE messages (
  id INT PRIMARY KEY,
  message VARCHAR(280),
  createdAt DATE,
  userId INT,
  chatroomID INT,
  FOREIGN KEY(userId) REFERENCES users(id)
  FOREIGN KEY(chatroomID) REFERENCES chatroom(id)
);
CREATE TABLE chatroom (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
CREATE TABLE friends (
  user INT, friend INT,
  FOREIGN KEY(user) references users(id),
  FOREIGN KEY(friend) REFERENCES users(id)
);
/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

