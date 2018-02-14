const Users = require('../model/users.js');

const login = (req, res) => {
  const {username, password} = req.body;
  Users.findUser({
    username: username,
    pwd: password
  }, (userInfo) => {
    if(!userInfo){
      res.json({
        "code": 1,
        "data": "请输入管理员账号"
      })
    }else{
      res.json({
        "code": 0,
        "data": {
          login: true
        }
      })
    }
  })
}

module.exports = {
  login
}