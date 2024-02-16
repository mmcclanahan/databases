var db = require('../db');

module.exports = {
  getAll: function (callback) {
     //get a list of all users from users table
    db.query('SELECT username from users', (err, rows, fields)=>{
      if(err){
        callback(err)
      } else {
        callback(null, rows);  // rows = [ username: 'Tim', username: 'steve']
      }
    });
  },
  create: function (username, callback) {
    //increment
    //query DB and then add a new user.
      //INSERT INTO users (username) VALUES (username variable value);

  }
};
