const {getuser,postuser,putuser,deleteuser,getuserbyid,getuserbymail,login} = require('../controller/userController')

const route = require('express').Router()

route.get('/',getuser)
route.post('/',postuser)
route.put('/update/:id',putuser)
route.delete('/:id',deleteuser)
route.get('/getbyid/:id',getuserbyid)
route.get('/getuser/:email',getuserbymail)

route.post('/login',login)

module.exports = route
