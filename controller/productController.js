const Product = require('../models/product')

// Get product
exports.getproduct = async (req,res)=>{
    try {
        const data = await Product.find().populate('category')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Post category
exports.postproduct = async (req,res)=>{
    try {
        const data = await Product.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Put category
exports.putproduct = async (req,res)=>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Delete category
exports.deleteproduct = async (req,res)=>{
    try {
       const data = await Product.findByIdAndDelete(req.params.id) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}