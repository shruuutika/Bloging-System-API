const express = require('express')
const mongoose = require('mongoose')
const BlogRoute = require('./route/blogRoute')
require('dotenv/config')
const UserRoute = require('./route/userRoute')
const CategoryRoute = require('./route/categoryRoute')
const ProductRoute = require('./route/productRoute')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// Default route
app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.use('/api/blog',BlogRoute)
app.use('/api/user',UserRoute)
app.use('/api/category',CategoryRoute)
app.use('/api/product',ProductRoute)

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})

async function main() {
    try {
       const res =await mongoose.connect(process.env.DB) 
       const data = await res.default
       console.log(data.STATES.connected);
    } catch (error) {
        console.log("errors",error.message);
    }
}
main()