const Category = require('../models/category')
const Product = require('../models/product')

// Get category
exports.getcategory = async (req,res)=>{
    try {
        const data = await Category.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Post category
exports.postcategory = async (req,res)=>{
    try {
        const data = await Category.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Put category
exports.putcategory = async (req,res)=>{
    try {
        const data = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// Delete category
exports.deletecategory = async (req,res)=>{
    try {
       const data = await Category.findByIdAndDelete(req.params.id) 
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}