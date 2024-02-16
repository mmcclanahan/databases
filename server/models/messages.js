var db = require('../db');
//roomname = username or roomname, chatroom = user or chatroom, name =
//table

var exists(tableName, columnName, itemName){
  return new Promise((resolve, reject) =>{
    db.query(`select id from ${tableName} where ${columnName} = '${itemName}'`, (err, data)=>{
      if(data.length === 0){
        reject(data, tableName, columnName, itemName);
      } else {
        resolve(null, data, fields, tableName, columnName, itemName);
      }
    })
  })



  /*
  db.query(`INSERT into chatroom(name) values(${roomname})`, (err, success)=>{
    if(err){
      console.log(err)
    } else {

    }
  });
  */
}

module.exports = {
  getAll: function (callback) {
//want a table with messages
    var queryString = `
    SELECT messages.id, messages.message, messages.createdAt, username, chatroom.name FROM messages INNER JOIN users ON messages.userid = users.id INNER JOIN chatroom on messages.chatroomId = chatroom.id
    `
    //console.log(typeof queryString);

    db.query(queryString, (err, messages) => {
      if(err){
        console.log('fail')
        callback(err)
      } else {
        console.log(messages,'getAll')
        callback(null, messages)
      }
    })
  }, // a function which produces all the messages

  create: function (username, roomname, message) {
    var IdFromUserTable;
    var IdFromChatroomTable;
    /*
    var queryString = '';
    queryString = `select id from users where username = '${username}';`
    db.query(queryString, (err, userid) => {
      //if error or [] db.query
      if (err || []) {
        //function
        console.log('Did it err?', err)
      } else {
        IdFromUserTable = userid;
        console.log(IdFromUserTable);
      }}
      )
    */
        //pushing everything
      exists(users, id, username)
      .catch((data, tableName, columnName, itemName)=>{
        db.query(`INSERT INTO users (username) VALUES (${data})`)
      })
      .then((err, data, fields, tableName, columnName, itemName)=>{
        //code to get id and store in a variable
        IdFromUserTable = data
      }).then(exists(/*Something here */))

/*
var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return pluckAndCode.pluckFirstLineFromFileAsync(readFilePath)
  .then((userName) => {
    return promises.getGitHubProfileAsync(userName)
  })
  .then((profile) => {
    return writeFile(writeFilePath, JSON.stringify(profile))
    })
};
*/
        let myquery = `select id from chatroom where name = '${roomname}'`
        console.log('myquery', myquery);
        db.query(myquery, (err, result) => {
        if (err || []) {
          //function
        } else {
          IdFromChatroomTable = result
            console.log("This part ran");
        }})

        db.query(`INSERT INTO messages (message, chatroomId, userId) VALUES (${message}, ${IdFromChatroomTable}, ${IdFromUserTable})`, (err, success)=>{
          if(err){
            console.log(err)
          } else {
            console.log('successfully added')
          }
        })
    //get userId using SQL select.   // 1
    //get chatroom ID using SQL select // 1
         //check if chatroom exists
         //if it does not exist create new chatroom.

    //Above above as variables.
    //Insert into message table.
    //db.query(`INSERT INTO messages (column, column, column) VALUES (value,value,value);`,)
    //INSERT INTO messages (column, column, column) VALUES (value,value,value);
    /*

    */
  } // a function which can be used to insert a message into the database

};