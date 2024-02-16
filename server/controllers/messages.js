var models = require('../models');

//use models.messages.getAll and )
module.exports = {
  get: function (req, res) {
    //res.send('GET request')
    //console.log(req);
    //console.log(res)
    //console.log("hi")
    models.messages.getAll((err, data) => {
      console.log('data', data);
    });
    res.end();
  },
  post: function (req, res) {
    //res.send('Post request')
    console.log('bod', req.query);
    var obj = req.query;
    console.log(obj.username)
    //console.log(res);
    //console.log("hi")

    models.messages.create(obj.username, obj.roomname, obj.message, (err, result) => {
      res.send('succcess')
    })
    res.end()
  } // a function which handles posting a message to the database
};
