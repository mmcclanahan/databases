var models = require('../models');

module.exports = {
  get: function (req, res) {
  models.users.getAll()
  res.send("Test");
  //res.status(200).end()
  console.log(req)
  console.log(res);



  },
  post: function (req, res) {
  //models.users.create
    res.send('Post request')

    console.log(req)
    console.log(res)
    res.end()
  }
};
