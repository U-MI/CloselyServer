require('dotenv').config() 
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const routeUser = require('./routes/user.route')
const routeRoom = require('./routes/room.route')
app.use(express.json())

app.use("/test",routeUser)
app.use("/room",routeRoom)

app.listen(PORT,()=>{
    console.log('Server start on:',PORT)
})