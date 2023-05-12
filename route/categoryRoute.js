const {getcategory,postcategory,putcategory,deletecategory} = require('../controller/categoryController')


const route = require('express').Router()

route.get('/',getcategory)
route.post('/',postcategory)
route.put('/:id',putcategory)
route.delete('/:id',deletecategory)

module.exports = route