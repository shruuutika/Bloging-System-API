const {getblog,postblog,putblog,deleteblog} = require('../controller/blogController')

const route = require('express').Router()

route.get('/',getblog)
route.post('/',postblog)
route.put('/:id',putblog)
route.delete('/:id',deleteblog)

module.exports = route