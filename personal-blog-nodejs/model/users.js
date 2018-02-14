const db = require('../utils/database.js');

const Users = db.model('user', {
  username: String,
  password: String
});

const findUser = (userInfo={}, callback) => {
  Users.findOne(userInfo).then((res) => {
    callback(res);
  })
}

module.exports = {
  findUser
};