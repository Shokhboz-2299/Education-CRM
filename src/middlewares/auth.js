const {signUser, verifyUser} = require('../lib/jwt');

const FS = require('../lib/fsDeal')
const users = new FS('../model/users.json')

module.exports = (req, res, next ) => {
  try {
    const { username, password } =req.body;
    const allUsers = JSON.parse(users.read())
    const foundUser = allUsers.find(e => e.username == username && e.password == password)
    if(foundUser) {
      let getToken = signUser({
        id: foundUser.id,
        name: foundUser.username,
        role: foundUser.role
      })
      res.cookie('token', getToken)
      req.body = foundUser
      next()
    }
    else {
      res.status(401).send({
        msg: "Invalid token"
    })
    }
  }
  catch(err){
    throw(err);
  }
}