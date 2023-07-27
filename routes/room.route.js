const express = require("express");
const roomController = require("../controllers/room.controller");
const route = express.Router();


route.post("/create",async(req,res)=>{
    return await roomController.create(req,res);
})

module.exports = route