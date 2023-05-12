const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    price:{
        type:Number,
        require:true
    },
    reviews:{
        type:Number,
        require:true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
})
module.exports = mongoose.model('category1',categorySchema)