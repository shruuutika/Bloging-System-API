const {getproduct,postproduct,putproduct,deleteproduct} = require('../controller/productController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getproduct)
route.post('/',auth,postproduct)
route.post('/',postproduct)
route.put('/',putproduct)
route.delete('/',deleteproduct)

module.exports = route