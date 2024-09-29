import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
//Confi App
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
//middleware 
app.use(express.json()) 
app.use(cors()) 
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


// le chemin des apis 

app.get('/',(req, res)=>{
    res.send("API working")
})



app.listen(port, ()=>{
    console.log(`Server bien demarré au port : http://localhost:${process.env.PORT}`)
})


