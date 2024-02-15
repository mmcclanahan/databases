var db = require('../db');

module.exports = {
  getAll: function (callback) {
    //db.query(SELECTcommand, )
    /*
    SELECT *
      FROM messages
      INNER JOIN users
      ON users.id = messages.userid;
      INNER JOIN chatroom on
      messages.chatroomID = chatroom.ID
    */
   /*
   SELECT *
      FROM table1
      INNER JOIN table2
      ON table1.primaryKey=table2.table1Id
      INNER JOIN table3
      ON table1.primaryKey=table3.table1Id
   */
  }, // a function which produces all the messages
  create: function (username, roomname, message) {
    db.query(
      INSERT into users()
    )
  } // a function which can be used to insert a message into the database
};
