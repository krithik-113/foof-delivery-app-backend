const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db.js')
require('dotenv').config()
const connectCloudinary = require('./middleware/cloudinary.js')
// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB()
connectCloudinary();
 
// api endpoints
app.use("/images", express.static("uploads"));
app.use("/api/food", require('./routes/foodRoute.js'))
app.use("/api/user", require("./routes/userRoute.js"));
app.use("/api/cart", require('./routes/cartRoute.js'))
app.use('/api/order',require('./routes/orderRoute.js'))

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port,"0.0.0.0", () => {
    console.log(`Server Started on http://localhost:${port}`)
})

