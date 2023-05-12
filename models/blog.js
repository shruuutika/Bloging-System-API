const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    content:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('blog',blogSchema)