const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type : String,
        require:true
    },
    category:[{type:mongoose.Schema.Types.ObjectId, ref:'category1'}],
    createdAt:{
      type: Date,
      default:Date.now()
    }
})
module.exports = mongoose.model('refproduct',productSchema)